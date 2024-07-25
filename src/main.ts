import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as socketIo from 'socket.io';
import { Server } from "socket.io";
import { createServer } from 'http';

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
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const httpServer = createServer(app.getHttpServer());
  const io = new Server(httpServer, {
    cors: {
      origin: '*',
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
  httpServer.listen(process.env.PORT || 8000);
}
bootstrap();
