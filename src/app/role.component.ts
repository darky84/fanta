import { Component, Input } from '@angular/core';
import { Role } from './player';

@Component({
  selector: 'app-role',
  template: '{{name}}'
})
export class RoleComponent {

  @Input() role: Role;

  get name() {
    switch(this.role) {
      case Role.GolKeeper: return 'P';
      case Role.Defender: return 'D';
      case Role.MiddleFielder: return 'C';
      default: return 'A';
    }
  }

}