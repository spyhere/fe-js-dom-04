const http = require('http')

const corsHeaders = ["Access-Control-Allow-Origin", "*"]

const requestListener = function (req, res) {
  console.log(`\x1b[32m${req.method}\x1b[0m`, req.url)
  switch (req.url) {
    case "/inquiry-submit":
      const isSuccess = Math.random() > 0.5
      if (isSuccess) {
        res.writeHead(200, corsHeaders)
        const body = { status: "Success", message: "We will reach out for you!" }
        res.end(JSON.stringify(body))
      } else {
        res.writeHead(500, corsHeaders)
        res.end()
      }
      return
    default:
      res.writeHead(404, corsHeaders)
      res.end()
      return
  }
}

const server = http.createServer(requestListener)
server.listen(8080)
console.log("\x1b[32m%s\x1b[0m", "Server is started on localhost:8080")

