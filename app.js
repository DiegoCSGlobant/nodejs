const http = require('http')
const fs = require('fs')


const server = http
  .createServer(function (req, res) {
    const url = req.url
    const method = req.method
    if (url === '/') {
      res.setHeader('Content-Type', 'text/html')
      res.write('<h1>Hello World</h1>')
      res.write('<body><form action="/message" method="POST"><input  type="text" name="message" /><button type="submit"> Submit</button> </form></body>')
      return res.end()
    }
    if (url === '/message' && method === 'POST') {
      const body = []
      req.on('data', function (chunk) {
        console.log('chunk', chunk)
        body.push(chunk)
      })
      req.on('end', function () {
        const parsedBody = Buffer.concat(body).toString()
        console.log({
          parsedBody
        });
        const message = parsedBody.split('=')[1]
        fs.writeFileSync('message.txt', message)
      })

      fs.writeFile('file.txt', 'DUMMY!', function (err) {
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
      })
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>Hello World</h1>')
    res.end()
  })



server.listen(3000, function () {
  console.log('Server listening on port 3000')
})