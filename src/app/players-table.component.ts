import { Component, Input, ViewChildren, QueryList } from '@angular/core';
import { SortableDirective, SortEvent, compare, SortDirection } from './sortable.directive';
import { Player } from './player';

@Component({
  selector: 'app-players-table',
  template: `
  <table class="table">
      <thead class="thead-dark">
        <tr>
        <th sortable="role" (sort)="onSort($event)">Ruolo<app-sort-dir [direction]="getSortDirection('role')"></app-sort-dir></th>
        <th sortable="name"(sort)="onSort($event)">Nome<app-sort-dir [direction]="getSortDirection('name')"></app-sort-dir></th>
        <th sortable="quotation"(sort)="onSort($event)">Quotazione<app-sort-dir [direction]="getSortDirection('quotation')"></app-sort-dir></th>
        <th sortable="valutation" (sort)="onSort($event)">Valutazione<app-sort-dir [direction]="getSortDirection('valutation')"></app-sort-dir>
        </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let player of sortedPlayers">
          <td><app-role [role]="player.role"></app-role></td>
          <td>{{player.name}}</td>
          <td>{{player.quotation}}</td>
          <td><app-valutation [value]="player.valutation" max="5"></app-valutation></td>
        </tr>
      </tbody>
    </table>
  `, styles: [`
  th { white-space: nowrap; }
  `]
})
export class PlayersTableComponent {
  @Input() players: Array<Player>;

  sortedPlayers: Array<Player>;

  lastSort: SortEvent = {
    column: '',
    direction: ''
  };

  ngOnInit() {
    this.onSort(this.lastSort);
  }

  ngOnChanges() {
    this.onSort(this.lastSort);
  }

  @ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

  onSort(event: SortEvent) {
    if (!this.headers) {
      this.sortedPlayers = this.players;
      return;
    }

    this.lastSort = event;
    const { column, direction } = event;

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting players
    if (direction === '') {
      this.sortedPlayers = this.players;
    } else {
      this.sortedPlayers = [...this.players].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

  getSortDirection(column): SortDirection {
    return this.headers ? this.headers.find((h) => h.sortable === column).direction : "";
  }


}