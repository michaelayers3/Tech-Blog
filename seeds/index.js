const sequelize = require('../config/connection');
const seedComments = require('./commentData');
const seedPosts = require('./postData');
const { User, Comment, Post } = require('../models'); // Import the User, Comment, and Post models
const userData = require('./userData.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  // Seed the users first
  await User.bulkCreate(userData, { individualHooks: true }); // Use individualHooks to hash passwords if you have password hashing configured in your User model

  // After users are seeded, you can seed the posts and comments
  await seedPosts();

  await seedComments();

  process.exit(0);
};

seedAll();


// const sequelize = require('../config/connection');
// const { post } = require('../controllers');
// const { User, Post, Comment } = require('../models');
// // const postData = require('./postData.json');
// // const userData = require('./userData.json');

// const seedAll = async () => {
//   await sequelize.sync({ force: true });

//   // Create a user
//   await User.create({
//     username: 'exampleuser',
//     password: 'examplepassword'
//   });

//   // Create a post
//   await Post.create({
//     post_id:1,
//     title: 'Example Post',
//     username: 'example-user', 
//     post_text: 'This is from the index',
//     date_created: '05/27/2023 12:00:00',
//     user_id: 1 
//   });

//   // Create a comment
//   await Comment.create({
//     comment_text: 'This is from the index',
//     user_id: 1,
//     username: 'example-user', 
//     date_created: '05/27/2023 12:00:00',
//     post_id: 1
//   });

//   process.exit(0);
// };

// seedAll();

