import { Component, Output, EventEmitter } from '@angular/core';
import { Role, allRoles } from './player';

@Component({
  selector: 'app-role-filter',
  template: `
    <div class="btn-group btn-group-toggle">
    <label class="btn-primary" ngbButtonLabel *ngFor="let role of roles">
    <input type="checkbox" ngbButton [(ngModel)]="selected[role]" (change)="changed()"> <app-role [role]="role"></app-role>
  </label>
</div>
  `
})
export class RoleFilterComponent {

  @Output() filterChange = new EventEmitter<Role[]>();

  roles = allRoles;

  selected = { } ;

  ngOnInit() {
    this.roles.forEach((role) => this.selected[role] = true);
  }

  changed() {
    this.filterChange.emit(
      this.roles.filter(
        role => this.selected[role]
      )
    );
  }
  
}