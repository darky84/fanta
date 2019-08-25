import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayersTableComponent } from './players-table.component';
import { SortableDirective } from './sortable.directive';
import { RoleComponent } from './role.component';
import { SortDirComponent } from './sort-dir.component';
import { RoleFilterComponent } from './role-filter.component';
import { ValutationComponent } from './valutation.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule],
  declarations: [AppComponent, PlayersTableComponent, RoleComponent, RoleFilterComponent, ValutationComponent,
  SortableDirective, SortDirComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
