const Datos = require('../models/graficoModel');
const { validationResult } = require('express-validator');

const getDatos = async (req, res) => {
  try {
    const datos = await Datos.findAll();

    if (!datos.length) {
      return res.status(200).json({
        code: 0,
        message: 'No hay datos disponibles.',
        data: [],
      });
    }
    res.status(200).json({
      code: 1,
      message: 'Datos List',
      data: datos
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al obtener los negocios',
    });
  }
};

const getDatoById = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;

    // Buscar un usuario por su ID en la base de datos
    const dato = await Datos.findByPk(id);
    if (!dato) {
      return res.status(404).json({
        code: -6,
        message: 'Dato no encontrado'
      });
    }

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Dato Detail',
      data: dato
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al obtener el negocio'
    });
  }
};

const addDato = async (req, res) => {
  console.log(req.body);
  try {
    const errors = validationResult(req);
    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } 
    const { año, emigrantes_hombres, emigrantes_mujeres, total_emigrantes_españa, total_emigrantes_mundo, pais_destino, nacionalidad, provincia_destino } = req.body;
    let newDato;
    try {
      newDato = await Datos.create({ año, emigrantes_hombres, emigrantes_mujeres, total_emigrantes_españa, total_emigrantes_mundo, pais_destino, nacionalidad, provincia_destino });
      console.log("Dato creado: ", newDato);
    } catch (error) {
      console.error('Error al guardar el dato:', error);
      // Si hay un error de duplicación de clave única (por ejemplo, título duplicado)
      if (error.nombre === 'SequelizeUniqueConstraintError') {
        res.status(400).json({
          code: -61,
          message: 'Duplicate Dato Title'
        });
      } else {
        res.status(500).json({
          code: -100,
          message: 'Error creando el dato',
          error: error.message
        });
      }
      return;
    }

    if (!newDato) {
      return res.status(404).json({
        code: -6,
        message: 'Ha ocurrido un error al agregar el dato'
      });
    }

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Dato agregado exitosamente',
      data: newDato
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al añadir el dato'
    });
  }
};

const updateDato = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { año, emigrantes_hombres, emigrantes_mujeres, total_emigrantes_españa, total_emigrantes_mundo, pais_destino, nacionalidad, provincia_destino } = req.body;

    // Buscar un usuario por su ID en la base de datos
    const dato = await Datos.findByPk(id);
    if (!dato) {
      return res.status(404).json({
        code: -3,
        message: 'Dato no encontrado'
      });
    }

    // Actualizar el correo electrónico y la contraseña del usuario
    dato.año = año;
    dato.emigrantes_hombres = emigrantes_hombres;
    dato.emigrantes_mujeres = emigrantes_mujeres;
    dato.total_emigrantes_españa = total_emigrantes_españa;
    dato.total_emigrantes_mundo = total_emigrantes_mundo;
    dato.pais_destino = pais_destino;
    dato.nacionalidad = nacionalidad;
    dato.provincia_destino = provincia_destino;
    await dato.save();

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Dato Updated Successfully',
      data: dato
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al actualizar el dato'
    });
  }
};

const deleteDato = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;

    // Buscar un libro por su ID en la base de datos y eliminarlo
    const deletedDato = await Datos.destroy({ where: { id_datos: id } });

    // Verificar si el libro fue encontrado y eliminado
    if (!deletedDato) {
      return res.status(404).json({
        code: -100,
        message: 'Dato Not Found'
      });
    }

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Dato Deleted Successfully'
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al eliminar el dato'
    });
  }
};

module.exports = {
    getDatos,
    getDatoById,
    addDato,
    updateDato,
    deleteDato
};
