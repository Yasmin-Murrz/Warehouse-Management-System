//setting up sequelize
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Load environment variables from the .env file
dotenv.config();

// Create a new Sequelize instance using environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME,      // Database name, e.g., 'warehouse_artiselite'
  process.env.DB_USER,      // Database username, e.g., 'root'
  process.env.DB_PASS,      // Database password, e.g., 'yourpassword'
  {
    host: process.env.DB_HOST, // Database host, e.g., '127.0.0.1'
    dialect: 'mysql',          // Specify the SQL dialect
  }
);

// Export the Sequelize instance to be used in other parts of the application
module.exports = sequelize;