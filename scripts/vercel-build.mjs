import { execSync } from 'child_process'
import { cpSync, mkdirSync, writeFileSync } from 'fs'
import { build } from 'esbuild'

// 1. Build the app (Vite SSR + client)
execSync('npm run build', { stdio: 'inherit' })

// 2. Scaffold .vercel/output/
const OUT = '.vercel/output'
const FUNC = `${OUT}/functions/index.func`

mkdirSync(`${OUT}/static`, { recursive: true })
mkdirSync(FUNC, { recursive: true })

// 3. Copy static client assets → .vercel/output/static/
cpSync('dist/client', `${OUT}/static`, { recursive: true })

// 4. Bundle the SSR server + all its node_module deps into a single self-contained file.
//    esbuild resolves and inlines everything; only Node.js built-ins stay external.
await build({
  entryPoints: ['scripts/vercel-entry.js'],
  bundle: true,
  outfile: `${FUNC}/index.js`,
  platform: 'node',
  target: 'node22',
  format: 'esm',
  // Keep Node.js built-ins external (available in every Vercel runtime)
  external: ['node:*'],
})

// 5. Tell Node.js the function directory is ESM
writeFileSync(`${FUNC}/package.json`, JSON.stringify({ type: 'module' }))

// 6. Function config
writeFileSync(
  `${FUNC}/.vc-config.json`,
  JSON.stringify({ runtime: 'nodejs22.x', handler: 'index.js', launcherType: 'Nodejs' }),
)

// 6. Vercel output routing config — static files first, then SSR fallback
writeFileSync(
  `${OUT}/config.json`,
  JSON.stringify({
    version: 3,
    routes: [
      { handle: 'filesystem' },
      { src: '/(.*)', dest: '/index' },
    ],
  }),
)

console.log('✓ .vercel/output/ assembled')
