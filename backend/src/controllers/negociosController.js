const Negocios = require('../models/negociosModel');
const { validationResult } = require('express-validator');

const getNegocios = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Obtener todos los usuarios de la base de datos
    const negocios = await Negocio.findAll();

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Negocios List',
      data: negocios
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al obtener los negocios',
    });
  }
};

const getNegocioById = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;

    // Buscar un usuario por su ID en la base de datos
    const negocio = await Negocio.findByPk(id);
    if (!negocio) {
      return res.status(404).json({
        code: -6,
        message: 'Negocio no encontrado'
      });
    }

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Negocio Detail',
      data: negocio
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al obtener el negocio'
    });
  }
};

const addNegocio = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, year } = req.body;
    let newNegocio;
    try {
      newNegocio = await Negocio.create({ title: title, year: year, user_id: req.user.id_user });
    } catch (error) {
      // Si hay un error de duplicación de clave única (por ejemplo, título duplicado)
      if (error.name === 'SequelizeUniqueConstraintError') {
        res.status(400).json({
          code: -61,
          message: 'Duplicate Negocio Title'
        });
      }
    }

    if (!newNegocio) {
      return res.status(404).json({
        code: -6,
        message: 'Error When Adding The Negocio'
      });
    }

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Negocio Added Successfully',
      data: newNegocio
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al añadir el negocio'
    });
  }
};

const updateNegocio = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { title, year } = req.body;

    // Buscar un usuario por su ID en la base de datos
    const negocio = await Negocio.findByPk(id);
    if (!negocio) {
      return res.status(404).json({
        code: -3,
        message: 'Negocio no encontrado'
      });
    }

    // Actualizar el correo electrónico y la contraseña del usuario
    negocio.title = title;
    negocio.year = year;
    await Negocio.save();

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Negocio Updated Successfully',
      data: Negocio
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al actualizar el libro'
    });
  }
};

const deleteNegocio = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;

    // Buscar un libro por su ID en la base de datos y eliminarlo
    const deletedNegocio = await Negocio.destroy({ where: { id_negocio: id } });

    // Verificar si el libro fue encontrado y eliminado
    if (!deletedNegocio) {
      return res.status(404).json({
        code: -100,
        message: 'Negocio Not Found'
      });
    }

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Negocio Deleted Successfully'
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al eliminar el negocio'
    });
  }
};

module.exports = {
    getNegocios,
    getNegocioById,
    addNegocio,
    updateNegocio,
    deleteNegocio
};
