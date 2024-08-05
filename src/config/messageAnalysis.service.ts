import { Injectable } from '@nestjs/common';
import openai from 'src/config/openai.config';

@Injectable()
export class MessageAnalysisService {
  async analyzeMessages(topicDescription: string, messages: { user: string, text: string }[]): Promise<string[]> {

    const prompt = `
      Eres un asistente útil en un chat de discusión de diferentes temas. El tema de la discusión es: "${topicDescription}".
      Tu tarea es analizar cada uno de los mensajes enviados por todos los participantes y asegurar que cada mensaje aporte nuevos conceptos y mantenga el contexto de la discusión. Si un mensaje no aporta nada nuevo en la discusión, o esta repetiendo el mismo mensaje de los demás participantes sin ningún aporte, o no mantiene el contexto, debes indicarlo especificando el usuario que envió el mensaje y la razón de la observación.

      Aquí están los mensajes: 
      ${messages.map((msg, idx) => `Mensaje ${idx + 1} de ${msg.user}: "${msg.text}"`).join('\n')}

      Ejemplos de observaciones:
      - El usuario [usuario] no está aportando nada nuevo a la discusión. Por favor, intenta contribuir con nuevas ideas.
      - El usuario [usuario] está fuera del contexto del debate.
      - El usuario [usuario] ha repetido un mensaje anterior y no aporta información adicional.

      Analiza cada mensaje individualmente y responde con las observaciones en el siguiente formato:
      - [Observación]

      Aquí está tu análisis:
    `;

    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-4o-2024-05-13',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: prompt },
        ],
        max_tokens: 300,
        temperature: 0.5,
      });

      const analysis = response.choices[0].message.content.trim();
      return analysis.split('\n');
    } catch (error) {
      console.error('Error during message analysis:', error);
      throw new Error('Failed to analyze messages.');
    }
  }
}
