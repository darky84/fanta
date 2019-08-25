import { Component } from '@angular/core';

import { Player, players as allPlayers, Role, allRoles } from './player';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  filter: Array<Role> = allRoles;

  get players(): Array<Player> {
    return allPlayers.filter(
      p => this.filter.indexOf(p.role) > -1
    );
  }

  updatedRoleFilter(filter) {
    this.filter = filter;
  }

}
