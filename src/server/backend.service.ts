import { Injectable } from '@nestjs/common';

@Injectable()
export class BackendService {
  dashboard() {
    return {
      dataset: {
        title: 'Dashboard',
        namespace: 'dashboard',
      },
    };
  }
}
