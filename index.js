var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' }); // 🔥 IMPORTANT
  res.end('App is running ✅');
}).listen(80, () => {
  console.log("Server running on port 80");
});
