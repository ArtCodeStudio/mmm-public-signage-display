import { Controller, Get, Render } from '@nestjs/common';
import { BackendService } from './backend.service';

@Controller('backend')
export class BackendController {
  constructor(private readonly backendService: BackendService) {}

  @Get()
  @Render('pages/dashboard.pug')
  dashboard() {
    return this.backendService.dashboard();
  }
}
