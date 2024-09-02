const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // adjust the path as needed
const bcrypt = require('bcrypt');

class User extends Model {}

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('manager', 'operator'), // Adjust roles as needed
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'User'
});

User.beforeCreate(async (user, options) => {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
});

module.exports = User;