import { Injectable, OnModuleInit } from '@nestjs/common';
import { io } from 'socket.io-client';

@Injectable()
export class AppService implements OnModuleInit {
  private socket;

  onModuleInit() {
    this.socket = io('http://localhost:3001', {
      withCredentials: true,
    });

    this.socket.on('connect', () => {
      console.log('Connected to socket server');
    });

    this.socket.on('newMessage', (message) => {
      console.log('New message:', message);
    });
  }

  sendMessage(message: string) {
    this.socket.emit('sendMessage', message);
  }
  getHello(): string {
    return 'Hello World!';}
}
