const router = require('express').Router();
const { where } = require('sequelize');
const { User, Post } = require('../../models');
const withAuth = require('../../utils/auth');


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

//PUT update post
router.put('/:id', async (req, res) => {
    try {
        const postData = await Post.update({
            where: {
            id: req.params.id,
            title: req.body.title,
            content: req.body.content,
            username: req.session.username,
            date_created: req.body.date_created,
            },
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
}
);


//DELETE post
router.delete('/:id', async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});
//GET all posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'date_created'],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
//GET one post
router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: Post,
                    attributes: ['id', 'title', 'content', 'date_created'],
                },
                {
                    model: User,
                    attributes: ['id', 'username'],
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'date_created'],
                },
            ],
        });

        const post = postData.get({ plain: true });
        res.render('post', { post, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// //GET one post
// router.get('/:id', async (req, res) => {
//     try {
//         Post.findOne({
//             where: {
//                 id: req.params.id,
//             },
//             include: [
//                 {
//                     model: User,
//                     attributes: ['username'],
//                 },
//             ],
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

        module.exports = router;