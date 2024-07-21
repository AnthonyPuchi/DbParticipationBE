
import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class AppGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('msgToServer')
  handleMessage(@MessageBody() message: any): void {
    this.server.emit('msgToClient', message);
  }
}
