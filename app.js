const express = require('express');
const sequelize = require('./src/config/database'); // Adjust the path as necessary

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    // Start the server only if the connection is successful
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      console.log(`Click here to open in browser: http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Define your routes here
app.get('/', (req, res) => {
  res.send('Hello World!');
});
