const router = require('express').Router(); 
const { Post } = require('../../models');
//POST new post


router.post('/api/post', async (req, res) => {
    try {
        const postData = await Post.create({
            title: req.body.title,
            content: req.body.content,
            username: req.session.username,
            date_created: req.body.date_created,
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
}
);

module.exports = router;