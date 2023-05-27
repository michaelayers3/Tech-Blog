const {Post} = require('../models');

const postData = [
    {
        title: "This is a post",
        post_text: "This is a post",
        username: "Poster",
        user_id: 1,
        date_created: "2021-08-18 00:00:00"
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
