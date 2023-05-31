const sequelize = require('../config/connection');
const { User, Comment, Post } = require('../models'); // Import the User, Comment, and Post models
const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, { individualHooks: true }); 

  await Post.bulkCreate(postData);

  await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedAll();

