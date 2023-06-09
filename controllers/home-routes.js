const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET all posts for homepage
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
            username: req.session.username,
            user_id: req.session.user_id,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET dashboard
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id,
            },
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('dashboard', {
            posts,
            username: req.session.username,
            user_id: req.session.user_id,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// router.get('/dashboard', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Post }],
//     });

//     const user = userData.get({ plain: true });
//     console.log(user)
//     res.render('dashboard', {
//       username: req.session.username,
//       user_id: req.session.user_id,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/dashboard', (req, res) => {
//     if (!req.session.loggedIn) {
//       res.redirect('/login'); // 
//     } else {
//       res.render('dashboard'); // 
//     }
//   });

//login
// router.get('/', withAuth, async (req, res) => {
//     try {
//       const userData = await User.findAll({
//         attributes: { exclude: ['password'] },
//         order: [['name', 'ASC']],
//       });
  
//       const users = userData.map((project) => project.get({ plain: true }));
  
//       res.render('homepage', {
//         users,
//         // Pass the logged in flag to the template
//         logged_in: req.session.logged_in,
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
module.exports = router;