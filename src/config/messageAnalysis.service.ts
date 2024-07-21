import { Injectable } from '@nestjs/common';
import openai from 'src/config/openai.config';

@Injectable()
export class MessageAnalysisService {
  async analyzeMessages(messages: string[], username: string): Promise<string> {
    const prompt = `
      Eres un asistente útil en un chat de discusión. Cada 10 mensajes enviados, debes analizar si están aportando nuevos conceptos a la discusión. Si un mensaje no aporta o repite lo que otros han dicho, envía un mensaje indicando que el usuario no está aportando a la discusión y debe enviar algo nuevo.

      Aquí están los mensajes más recientes:
      
      ${messages.map((msg, index) => `Mensaje ${index + 1}: "${msg}"`).join('\n')}

      Analiza el último mensaje (Mensaje ${messages.length}): "${messages[messages.length - 1]}" y determina si aporta nuevos conceptos a la discusión. Si no aporta o repite lo que ya se ha dicho, responde con: "El usuario ${username} no está aportando nada nuevo a la discusión. Por favor, intenta contribuir con nuevas ideas."
    `;

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
    return analysis;
  }
}
