import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { createServer } from 'http';
import { Server } from 'socket.io';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API for users, rooms and topics')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: 'http://localhost:5173',  // Cambia esto a la URL de tu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const httpServer = createServer(app.getHttpServer());
  const io = new Server(httpServer, {
    cors: {
      origin: 'http://localhost:5173', // Cambia esto a la URL de tu frontend
      methods: ['GET', 'POST'],
      credentials: true,
    },
  });

  io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('sendMessage', (message) => {
      io.emit('newMessage', message);
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

  await app.listen(process.env.PORT || 8000);
  httpServer.listen(process.env.PORT || 8000);
}
bootstrap();
