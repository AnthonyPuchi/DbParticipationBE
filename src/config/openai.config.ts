import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Asegúrate de tener la clave API en tus variables de entorno
});

export default openai;
