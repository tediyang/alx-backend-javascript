const readUser = require('readline');

const data = readUser.createInterface({
  input: process.stdin,
  output: process.stdout
});

data.question('Welcome to Holberton School, what is your name?\n',
(userName) => {
  console.log(`Your name is: ${userName}`);
  data.close();
});

process.stdin.on('close', () => {
  process.stdout.write('This important software is now closing\n');
});
