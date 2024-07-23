import { Injectable } from '@nestjs/common';
import openai from 'src/config/openai.config';

@Injectable()
export class MessageAnalysisService {
  async analyzeMessages(messages: string[], username: string): Promise<string[]> {
    const recentMessages = messages.slice(-10);
    const prompt = `
      Eres un asistente útil en un chat de discusión. Tienes que analizar los últimos 10 mensajes enviados por los participantes y asegurar que cada mensaje aporte nuevos conceptos y mantenga el contexto de la discusión. Si un mensaje no aporta nada nuevo, es repetitivo o no mantiene el contexto, debes indicarlo.

      Aquí están los mensajes más recientes:
      ${recentMessages.map((msg, idx) => `Mensaje ${idx + 1}: "${msg}"`).join('\n')}

      Analiza los mensajes de manera general de todos los mensajes enviados por todos los usuarios y determina si aporta nuevos conceptos a la discusión. Si no aporta o repite lo que ya se ha dicho, responde con: "El usuario ${username} no está aportando nada nuevo a la discusión. Por favor, intenta contribuir con nuevas ideas."
    `;

    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-4o-2024-05-13',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: prompt },
        ],
        max_tokens: 100,
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
