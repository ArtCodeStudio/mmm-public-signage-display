import { IMagicMirrorHelper, IMMLog, IClientModuleInstanceProperties, ISignageTimelineModule } from '../interfaces';
import { SocketService } from './socket.service';

export class ModulesService {

  public static instance?: ModulesService;

  protected socketService: SocketService;

  constructor(
    protected readonly magicMirrorHelper: IMagicMirrorHelper,
    protected readonly magicMirrorLogger: IMMLog,
    protected readonly magicMirrorModule: IClientModuleInstanceProperties,
  ) {
    this.socketService = new SocketService(magicMirrorHelper, magicMirrorLogger, magicMirrorModule);
    if (ModulesService.instance) {
      return ModulesService.instance;
    }
    ModulesService.instance = this;

    this.socketService.on('SHOW_MODULES', (payload) => {
      this.magicMirrorLogger.log('ModulesService', payload);
      this.hideAll();
      this.setPositions(payload.modules);
    });
  }

  getid(mname: string) {
    let id: string;
    this.magicMirrorHelper.getModules().enumerate((module) => {
      if (mname === module.name) {
        id = module.identifier;
      }
    });
    return id;
  }

  hideAll() {
    this.magicMirrorHelper.getModules().enumerate((module) => {
      module.hide();
    });
  }

  setPositions(timelineModules: ISignageTimelineModule[]) {
    this.magicMirrorLogger.log('setPositions', timelineModules);
    for (const timelineModule of timelineModules) {
      const moduleName = timelineModule.module.module;
      const id = this.getid(moduleName);
      this.magicMirrorLogger.log('id', id);
      this.magicMirrorHelper.getModules().withClass(moduleName).enumerate((module) => {
        if (timelineModule.position) {
          const splitPosition = timelineModule.position.split('_');
          const selectedModule = document.getElementById(id);
          const region = document.querySelector('div.region.' + splitPosition[0] + '.' + splitPosition[1] + ' div.container') as HTMLElement;

          this.magicMirrorLogger.log('setPositions', timelineModule.name);

          // Make sure the region is visible
          if (region.style.display === 'none') {
            region.style.display = 'block';
          }

          // Move module
          region.appendChild(selectedModule);

        }

        // Set the module visible after moving to trigger css opacity transition animation
        if (timelineModule.visible === true) {
          module.show();
          // module.show(1000, () => {
          //   //
          // });
        } else if (timelineModule.visible === false) {
          module.hide();
          // module.hide(1000, () => {
          //   //
          // });
        }
      });
    }
  }

  setDefaults() {
    this.magicMirrorHelper.getModules().enumerate((module) => {
      if (module.data.position) {
        const splitPosition = module.data.position.split('_');
        const selectedModule = document.getElementById(module.identifier);
        const region = document.querySelector('div.region.' + splitPosition[0] + '.' + splitPosition[1] + ' div.container') as HTMLElement;

        // Make sure the region is visible
        if (region.style.display === 'none') {
          region.style.display = 'block';
        }

        // Move module to its original position
        region.appendChild(selectedModule);

        // Show module
        module.show(1000, () => {
          //
        });
      }
    });
  }

}
