// import http from 'http';

// const port = 8080;

// const routes = {
//   '/': 'this still is a webpage :/',
//   '/books': 'there is a lot of books here'
// }

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     'Content-Type': 'text/plain'
//   })

//   res.end(routes[req.url])
// })

// server.listen(port, () => console.log(`Listening on: http://localhost:${port}`))

import express from 'express';

const app = express();
const port = process.env.PORT || 3333; 

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ status: 200 })
})

app.listen(port, () => console.log(`API entry: http://localhost:${port}`))