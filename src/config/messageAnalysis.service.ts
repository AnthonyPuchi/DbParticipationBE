import { Injectable } from '@nestjs/common';
import openai from 'src/config/openai.config';

@Injectable()
export class MessageAnalysisService {
  async analyzeMessage(message: string): Promise<string> {
    const prompt = `
      Analizar el siguiente mensaje y verificar si está aportando en la discusión. 
      Si no está aportando, devuelve un mensaje diciendo que el usuario no aporta nada en la discusión y que vuelva a participar.
      
      Mensaje: "${message}"
    `;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-2024-05-13',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt },
      ],
      max_tokens: 30,
      temperature: 0.5,
    });

    const analysis = response.choices[0].message.content.trim();
    return analysis;
  }
}
