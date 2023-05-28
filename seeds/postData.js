const {Post} = require('../models');

const postData = [
    {
        id: 1,
        title: "This is a post",
        post_text: "This is from postData",
        username: "Poster",
        user_id: 1,
        date_created: "05/27/2023 12:00:00"
    },

    {
        id: 2,
        title: "This is another post",
        post_text: "This is from postData",
        username: "Poster2",
        user_id: 1,
        date_created: "05/27/2023 12:00:00"
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
