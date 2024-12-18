const express = require('express');
const { getPosts, getPostById, addPost, updatePost, deletePost } = require('../controllers/blogController');
const { authenticateToken } = require('../middlewares/authenticateToken.js');
const { blogValidator } = require('../validations/blog.Validation.js');
const { idValidator } = require('../validations/generic.Validation.js');


const router = express.Router();

// Rutas del blog
router.get('/', getPosts);
router.get('/:id',idValidator, getPostById);
router.post('/', addPost);
router.patch('/:id', idValidator, blogValidator, updatePost);
router.delete('/:id', idValidator, deletePost);

module.exports = router;
