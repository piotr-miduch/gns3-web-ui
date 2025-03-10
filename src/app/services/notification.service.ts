import { Injectable } from '@angular/core';
import { Server } from '../models/server';
import { HttpServer } from './http-server.service';

@Injectable()
export class NotificationService {
  constructor(private httpServer: HttpServer) {}

  notificationsPath(server: Server): string {
    return `ws://${server.host}:${server.port}/v2/notifications/ws`;
  }
}
