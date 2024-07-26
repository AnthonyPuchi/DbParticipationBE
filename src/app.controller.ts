import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('send-message')
  sendMessage(@Body('message') message: string) {
    this.appService.sendMessage(message);
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();{
  }
    }}

