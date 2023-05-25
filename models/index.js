const User = require('./User');
const Post = require('./post');
const Comment = require('./comments');

Post.hasMany(Comment, {
    foreignKey: 'post_id',
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

module.exports = { User, Post, Comment };  