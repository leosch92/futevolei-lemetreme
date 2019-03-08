import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RankingComponent } from './ranking.component';

const rankingRoutes: Routes = [
  {path: 'ranking', component: RankingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(rankingRoutes)],
  exports: [RouterModule]
})
export class RankingRoutingModule { }
