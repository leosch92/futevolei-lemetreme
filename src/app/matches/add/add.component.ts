import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MenuItem } from 'src/app/shared/menu-item';
import { Player } from 'src/app/shared/player';
import { PlayersService } from 'src/app/shared/players.service';
import { MatchesService } from '../matches.service';
import { NotificationService } from 'src/app/notification/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  addForm: FormGroup;
  playersOptions: MenuItem[];

  constructor(private playersService: PlayersService, private matchesService: MatchesService, private notificationService: NotificationService, private router: Router) { }

  ngOnInit() {
    this.addForm = new FormGroup({
      'winners': new FormGroup({
        'left': new FormControl(null, Validators.required),
        'right': new FormControl(null, Validators.required)
      }),
      'losers': new FormGroup({
        'left': new FormControl(null, Validators.required),
        'right': new FormControl(null, Validators.required)
      }),
      'result': new FormGroup({
        'winner': new FormControl(null, Validators.required),
        'loser': new FormControl(null, Validators.required)
      })
    });

    this.playersService.getPlayers().subscribe(
      (players: Player[]) => {
        this.playersOptions = players.map(
          (player: Player) => {
            return {label: player.name, value: +player.id};
          }
        );
        this.playersOptions.sort(this.comparePlayerOptions);
      }
    );
  }

  onAddMatch(){
    this.matchesService.addMatch(this.addForm.value).subscribe(
      (response: Response) => this.notificationService.send('success', 'Partida salva com sucesso!'),
      (error: Error) => console.log('erro')
    );
    this.router.navigate(['/matches']);
  }

  comparePlayerOptions(playerOptionA: MenuItem, playerOptionB: MenuItem) {
    if (playerOptionA.label < playerOptionB.label){
      return -1;
    }
    return 1;
  }

}
