import { Module, NestModule, DynamicModule, MiddlewareConsumer } from '@nestjs/common';
import { BackendController } from './backend.controller';
import { BackendService } from './backend.service';
import { LoggerService } from './logger.service';
import { NestModuleOptions } from '../interfaces';

@Module({
  imports: [],
  controllers: [BackendController],
  providers: [BackendService, LoggerService],
})
export class AppModule implements NestModule {
  static forRoot(options: NestModuleOptions): DynamicModule {
    const settingsProvider = {
      provide: 'NodeHelper',
      useValue: options.nodeHelper,
    };
    return {
      module: AppModule,
      providers: [
        settingsProvider,
      ],
      exports: [],
    };
  }
  configure(consumer: MiddlewareConsumer) {
    //
  }
}
