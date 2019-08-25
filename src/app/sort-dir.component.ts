import { Component, Input } from '@angular/core';
import { SortDirection } from './sortable.directive';

@Component({
  selector: 'app-sort-dir',
  template: `&nbsp;
    <i *ngIf="direction ==='asc'" class="fas fa-caret-up"></i>
    <i *ngIf="direction ==='desc'" class="fas fa-caret-down"></i>
    <span *ngIf="direction ===''">&nbsp;</span>
  `
})
export class SortDirComponent {

  @Input() direction: SortDirection;

  

}