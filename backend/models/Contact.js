import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  telefono: String,
  mensaje: String,
  fecha: { type: Date, default: Date.now }
});

export default mongoose.model('Contact', contactSchema);
