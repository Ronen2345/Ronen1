const express = require('express'); // We need to add express
const chalk = require('chalk');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log(chalk.blue('Someone visited the site!'));
  res.send('<h1 style="color: blue;">Hello World in Blue!</h1>');
});

app.listen(port, () => {
  console.log(chalk.green(`Server is live at http://localhost:${port}`));
});
