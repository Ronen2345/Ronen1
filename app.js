const express = require('express'); // We need to add express
const chalk = require('chalk');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log(chalk.blue('Someone visited the site!'));
  res.send(`
    <div style="text-align: center; margin-top: 50px; font-family: sans-serif;">
      <h1 style="color: blue; font-size: 48px;">Hello World in Blue!</h1>
      <button onclick="location.reload()" style="padding: 10px 20px; font-size: 16px; cursor: pointer;">
        Refresh Page
      </button>
    </div>
  `);
});

app.listen(port, () => {
  console.log(chalk.green(`Server is live at http://localhost:${port}`));
});
