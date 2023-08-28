const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;

  if (req.url === '/') {
    res.write('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students');
    await countStudents(process.argv[2])
      .then((msg) => {
        res.write(msg);
      })
      .catch((err) => {
        res.write(err.message);
      });
  }
  res.end();
});

app.listen(port, () => {
  console.log('...');
});

module.exports = app;
