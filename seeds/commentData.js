const { Comment } = require('../models');   

const commentData = [
    {
        comment_text: "This is from commentData",
        user_id: 1,
        username: "exampleuser",
        post_id: 1,
        date_created: "May 27, 2023 12:00:00"
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;