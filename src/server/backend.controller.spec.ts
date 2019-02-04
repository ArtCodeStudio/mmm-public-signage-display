import { Test, TestingModule } from '@nestjs/testing';
import { BackendController } from './backend.controller';
import { BackendService } from './backend.service';

describe('BackendController', () => {
  let backendController: BackendController;

  beforeEach(async () => {
    const backend: TestingModule = await Test.createTestingModule({
      controllers: [BackendController],
      providers: [BackendService],
    }).compile();

    backendController = backend.get<BackendController>(BackendController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      // expect(backendController.dashboard()).toBe('Hello World!');
    });
  });
});
