import { SocketGateway } from './socket/socket.gateway';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [SocketGateway],
})
export class AppModule {}
