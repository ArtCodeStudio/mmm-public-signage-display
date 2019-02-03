import { Module } from '@nestjs/common';
import { BackendController } from './backend.controller';
import { BackendService } from './backend.service';
import { LoggerService } from './logger.service';

@Module({
  imports: [],
  controllers: [BackendController],
  providers: [BackendService, LoggerService],
})
export class AppModule {}
