import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { nombre, correo, telefono, mensaje } = req.body;
    const nuevoContacto = new Contact({ nombre, correo, telefono, mensaje });
    await nuevoContacto.save();
    res.status(201).json({ message: 'Mensaje enviado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al enviar mensaje' });
  }
});

export default router;
