import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-valutation',
  template: `
    <i *ngFor="let i of full" class="fas fa-star"></i>
    <i *ngFor="let i of empty" class="far fa-star"></i>
  `
})
export class ValutationComponent {
 
  @Input() value: number;
  @Input() max: number = 5;

  get full() {
    return Array(this.value);
  }

  get empty() {
    return Array(this.max - this.value);
  }

}