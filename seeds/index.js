// const sequelize = require('../config/connection');
// const seedComments = require('./commentData');
// const seedPosts = require('./postData');

// const seedAll = async () => {
//   await sequelize.sync({ force: true });

//   await seedComments();

//   await seedPosts();

//   process.exit(0);
// };

// seedAll();

const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  // Create a user
  await User.create({
    username: 'exampleuser',
    password: 'examplepassword'
  });

  // Create a post
  await Post.create({
    title: 'Example Post',
    post_text: 'This is an example post',
    date_created: '2021-08-18 06:00:00',
    user_id: 1 // Use the correct user_id that exists in the `users` table
  });

  // Create a comment
  await Comment.create({
    comment_text: 'This is a stupid comment',
    user_id: 1,
    user_name: 'example-user', // Use the correct user_id that exists in the `users` table
    post_id: 1,
    date_created: '2021-08-18 06:00:00'
  });

  process.exit(0);
};

seedAll();

