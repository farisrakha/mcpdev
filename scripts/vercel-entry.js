// Entry point bundled by esbuild — adapts TanStack Start's fetch handler to Node.js
import server from '../dist/server/server.js'

export default async function handler(req, res) {
  const proto = req.headers['x-forwarded-proto'] ?? 'https'
  const host = req.headers['x-forwarded-host'] ?? req.headers.host
  const url = new URL(req.url, `${proto}://${host}`)

  const headers = new Headers()
  for (const [k, v] of Object.entries(req.headers)) {
    if (typeof v === 'string') headers.set(k, v)
    else if (Array.isArray(v)) v.forEach((val) => headers.append(k, val))
  }

  const fetchReq = new Request(url, { method: req.method, headers })
  const fetchRes = await server.fetch(fetchReq)

  res.statusCode = fetchRes.status
  fetchRes.headers.forEach((v, k) => res.setHeader(k, v))

  const body = await fetchRes.arrayBuffer()
  res.end(Buffer.from(body))
}
