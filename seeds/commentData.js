const { Comment } = require('../models');   

const commentData = [
    {
        comment_text: "This is a comment",
        user_id: 1,
        username: "exampleuser",
        post_id: 1,
        date_created: "2021-08-18 00:00:00"
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;