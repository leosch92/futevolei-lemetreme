import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VisualizeComponent } from './visualize/visualize.component';
import { AddComponent } from './add/add.component';
import { MatchesComponent } from './matches.component';

const matchesRoutes = [
  {path: 'matches', component: MatchesComponent, children: [
    {path: '', component: VisualizeComponent},    
    {path: 'add', component: AddComponent }
  ]}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(matchesRoutes)],
  exports: [RouterModule]
})
export class MatchesRoutingModule { }
