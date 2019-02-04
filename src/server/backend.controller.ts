import { Controller, Get, Render, Logger } from '@nestjs/common';
import { BackendService } from './backend.service';
import { LoggerService } from './logger.service';

@Controller('backend')
export class BackendController {
  protected logger = new LoggerService('BackendController');
  constructor(
    private readonly backendService: BackendService,
  ) {

  }

  @Get()
  @Render('pages/dashboard.pug')
  dashboard() {
    return this.backendService.dashboard();
  }
}
