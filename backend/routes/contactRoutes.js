import express from 'express';
import Contact from '../models/Contact.js';
import fetch from 'node-fetch'; // Si usas Node 18+, puedes usar global fetch

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { nombre, correo, telefono, mensaje, recaptchaToken } = req.body;

    // Validar reCAPTCHA
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
    const recaptchaRes = await fetch(verifyUrl, { method: 'POST' });
    const recaptchaData = await recaptchaRes.json();
    
    if (!recaptchaData.success) {
      return res.status(400).json({ error: 'reCAPTCHA inválido' });
    }

    const nuevoContacto = new Contact({ nombre, correo, telefono, mensaje, recaptchaToken: true });

    await nuevoContacto.save();
    res.status(201).json({ message: 'Mensaje enviado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al enviar mensaje' });
  }
});

export default router;