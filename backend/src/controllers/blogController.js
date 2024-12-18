const Post = require('../models/postModel');
const { validationResult } = require('express-validator');

const getPosts = async (req, res) => {
    try {
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const posts = await Post.findAll();
  
      res.status(200).json({
        code: 1,
        message: 'Posts List',
        data: posts,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        code: -100,
        message: 'Ha ocurrido un error al obtener las publicaciones',
      });
    }
  };

  const getPostById = async (req, res) => {
    try {
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { id } = req.params;
  
      const post = await Post.findByPk(id);
      if (!post) {
        return res.status(404).json({
          code: -6,
          message: 'Publicación no encontrada',
        });
      }
  
      res.status(200).json({
        code: 1,
        message: 'Post Detail',
        data: post,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        code: -100,
        message: 'Ha ocurrido un error al obtener la publicación',
      });
    }
  };

  const addPost = async (req, res) => {
    try {
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { titulo, contenido, autor, categoria } = req.body;
  
      let newPost;
      try {
        newPost = await Post.create({
          titulo,
          contenido,
          autor,
          categoria,
        });
      } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
          return res.status(400).json({
            code: -61,
            message: 'Duplicate Post Title',
          });
        }
      }
  
      if (!newPost) {
        return res.status(404).json({
          code: -6,
          message: 'Error When Adding The Post',
        });
      }
  
      res.status(200).json({
        code: 1,
        message: 'Post Added Successfully',
        data: newPost,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        code: -100,
        message: 'Ha ocurrido un error al añadir la publicación',
      });
    }
  };

  const updatePost = async (req, res) => {
    try {
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { id } = req.params;
      const { titulo, contenido, categoria } = req.body;
  
      const post = await Post.findByPk(id);
      if (!post) {
        return res.status(404).json({
          code: -3,
          message: 'Publicación no encontrada',
        });
      }
  
      post.titulo = titulo;
      post.contenido = contenido;
      post.categoria = categoria;
      await post.save();
  
      res.status(200).json({
        code: 1,
        message: 'Post Updated Successfully',
        data: post,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        code: -100,
        message: 'Ha ocurrido un error al actualizar la publicación',
      });
    }
  };

  const deletePost = async (req, res) => {
    try {
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { id } = req.params;
  
      const deletedPost = await Post.destroy({ where: { id_blog: id } });
  
      if (!deletedPost) {
        return res.status(404).json({
          code: -100,
          message: 'Publicación no encontrada',
        });
      }
  
      res.status(200).json({
        code: 1,
        message: 'Post Deleted Successfully',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        code: -100,
        message: 'Ha ocurrido un error al eliminar la publicación',
      });
    }
  };
  
  module.exports = {
    getPosts,
    getPostById,
    addPost,
    updatePost,
    deletePost,
  };