import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesRoutingModule } from './matches-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { MatchesComponent } from './matches.component';
import { AddComponent } from './add/add.component';
import { VisualizeComponent } from './visualize/visualize.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { ResultPipe } from './result.pipe';
import { PlayerNamePipe } from './players-name.pipe';

@NgModule({
  declarations: [
    MatchesComponent, 
    AddComponent, 
    VisualizeComponent, 
    TableComponent,
    ResultPipe,
    PlayerNamePipe
  ],
  imports: [
    CommonModule,
    MatchesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ]
})
export class MatchesModule { }
