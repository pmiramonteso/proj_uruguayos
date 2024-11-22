const Eventos = require('../models/eventosModel');
const { validationResult } = require('express-validator');

// Obtener todos los eventos
const getEventos = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Obtener todos los eventos de la base de datos
    const eventos = await Eventos.findAll();

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Eventos Listados',
      data: eventos
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al obtener los eventos',
    });
  }
};

// Obtener un evento por ID
const getEventoById = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;

    // Buscar un evento por su ID en la base de datos
    const evento = await Eventos.findByPk(id);
    if (!evento) {
      return res.status(404).json({
        code: -6,
        message: 'Evento no encontrado'
      });
    }

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Detalle del Evento',
      data: evento
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al obtener el evento'
    });
  }
};

// Agregar un evento
const addEvento = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { titulo, descripcion, fecha, entrada, precio } = req.body;

    // Validación adicional para precio si la entrada es 'Con precio'
    if (entrada === 'Con precio' && (!precio || precio <= 0)) {
      return res.status(400).json({
        code: -62,
        message: 'Debe proporcionar un precio válido cuando el evento tiene un costo'
      });
    }

    let newEvento;

    try {
      newEvento = await Eventos.create({
        titulo,
        descripcion,
        fecha,
        entrada,
        precio: entrada === 'Con precio' ? precio : null, // Solo asignamos precio si es "Con precio"
        user_id: req.user.id_user
      });
    } catch (error) {
      // Manejo de errores generales
      console.error(error);
      return res.status(500).json({
        code: -100,
        message: 'Ha ocurrido un error al añadir el evento'
      });
    }

    if (!newEvento) {
      return res.status(404).json({
        code: -6,
        message: 'Error al agregar el evento'
      });
    }

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Evento agregado con éxito',
      data: newEvento
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al añadir el evento'
    });
  }
};

// Actualizar un evento
const updateEvento = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { titulo, descripcion, fecha, entrada, precio } = req.body;

    // Validación adicional para precio si la entrada es 'Con precio'
    if (entrada === 'Con precio' && (!precio || precio <= 0)) {
      return res.status(400).json({
        code: -62,
        message: 'Debe proporcionar un precio válido cuando el evento tiene un costo'
      });
    }

    // Buscar un evento por su ID en la base de datos
    const evento = await Eventos.findByPk(id);
    if (!evento) {
      return res.status(404).json({
        code: -3,
        message: 'Evento no encontrado'
      });
    }

    // Actualizar el evento
    evento.titulo = titulo;
    evento.descripcion = descripcion;
    evento.fecha = fecha;
    evento.entrada = entrada;
    evento.precio = entrada === 'Con precio' ? req.body.precio : null; // Solo asignamos precio si es "Con precio"
    await evento.save();

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Evento actualizado con éxito',
      data: evento
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al actualizar el evento'
    });
  }
};

// Eliminar un evento
const deleteEvento = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;

    // Buscar un evento por su ID en la base de datos y eliminarlo
    const deletedEvento = await Eventos.destroy({ where: { id_evento: id } });

    // Verificar si el evento fue encontrado y eliminado
    if (!deletedEvento) {
      return res.status(404).json({
        code: -100,
        message: 'Evento no encontrado'
      });
    }

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Evento eliminado con éxito'
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al eliminar el evento'
    });
  }
};

module.exports = {
  getEventos,
  getEventoById,
  addEvento,
  updateEvento,
  deleteEvento
};
