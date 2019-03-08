import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/shared/match';
import { MatchesService } from '../matches.service';
import { PlayersService } from 'src/app/shared/players.service';
import { Player } from 'src/app/shared/player';

@Component({
  selector: 'app-table-matches',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  matches: Match[];
  players: Player[];

  constructor(private matchesService: MatchesService, private playersService: PlayersService) { }

  ngOnInit() {
    this.fetchTableInfo();
  }

  fetchTableInfo() {
    this.playersService.getPlayers().subscribe(
      (players: Player[]) => {
        this.players = players;
        this.fetchMatches();
      }
    )
  }

  fetchMatches() {
    this.matchesService.getMatches().subscribe(
      (matches: any) => {
        this.matches = Object.values(matches);
        this.matches.reverse();
      }
    );
  }

}
