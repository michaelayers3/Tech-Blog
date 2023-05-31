const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//GET all comments
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});
//GET one comment
router.get('/:id', async (req, res) => {
    try {
        const commentData = await Comment.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});
//POST new comment
router.post('/:post_id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.create({
            comment_text: req.body.comment_text,
            user_id: req.session.user_id,
            post_id: req.params.post_id,
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
}
);
//PUT update comment
// router.put('/:id', withAuth, async (req, res) => {
//     try {
//         const commentData = await Comment.update({
//             where: {
//                 id: req.params.id,
//                 comment_text: req.body.comment_text,
//                 post_id: req.body.post_id,
//                 user_id: req.session.user_id,
//             },
//         });
//         res.status(200).json(commentData);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// }
// );

module.exports = router;