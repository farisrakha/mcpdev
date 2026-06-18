import { execSync } from 'child_process'
import { cpSync, mkdirSync, writeFileSync } from 'fs'

// 1. Build the app
execSync('npm run build', { stdio: 'inherit' })

// 2. Scaffold .vercel/output/
const OUT = '.vercel/output'
const FUNC = `${OUT}/functions/index.func`

mkdirSync(`${OUT}/static`, { recursive: true })
mkdirSync(FUNC, { recursive: true })

// 3. Copy static client assets → .vercel/output/static/
cpSync('dist/client', `${OUT}/static`, { recursive: true })

// 4. Copy server bundle → function directory (preserving relative imports)
cpSync('dist/server', FUNC, { recursive: true })

// 5. Write the Node.js function entry that adapts the fetch handler
writeFileSync(
  `${FUNC}/index.js`,
  `import server from './server.js'

export default async function handler(req, res) {
  const proto = req.headers['x-forwarded-proto'] ?? 'https'
  const host = req.headers['x-forwarded-host'] ?? req.headers.host
  const url = new URL(req.url, proto + '://' + host)

  const headers = new Headers()
  for (const [k, v] of Object.entries(req.headers)) {
    if (typeof v === 'string') headers.set(k, v)
    else if (Array.isArray(v)) v.forEach(val => headers.append(k, val))
  }

  const fetchReq = new Request(url, { method: req.method, headers })
  const fetchRes = await server.fetch(fetchReq)

  res.statusCode = fetchRes.status
  fetchRes.headers.forEach((v, k) => res.setHeader(k, v))

  const body = await fetchRes.arrayBuffer()
  res.end(Buffer.from(body))
}
`,
)

// 6. Function config
writeFileSync(
  `${FUNC}/.vc-config.json`,
  JSON.stringify({ runtime: 'nodejs22.x', handler: 'index.js', launcherType: 'Nodejs' }),
)

// 7. Vercel output routing config
writeFileSync(
  `${OUT}/config.json`,
  JSON.stringify({
    version: 3,
    routes: [
      // Serve existing static files first, then fall through to SSR
      { handle: 'filesystem' },
      { src: '/(.*)', dest: '/index' },
    ],
  }),
)

console.log('✓ .vercel/output/ assembled')
