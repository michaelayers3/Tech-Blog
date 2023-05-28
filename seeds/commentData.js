const { Comment } = require('../models');   

const commentData = [
    {
        id: 1,
        user_id: 1,
        post_id: 1,
        comment_text: "This is from commentData",
        username: "exampleuser",
        date_created: "May 27, 2023 12:00:00"
    },

    {
        id: 2,
        user_id: 2,
        post_id: 1,
        comment_text: "This is also from commentData",
        username: "exampleuser2",
        date_created: "May 27, 2023 12:00:00"
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;