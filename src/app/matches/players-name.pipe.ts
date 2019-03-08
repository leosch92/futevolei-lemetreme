import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../shared/player';

@Pipe({name: 'playerName'})
export class PlayerNamePipe implements PipeTransform {
  transform(id: number, players: Player[]): string {
      return players.find(player => player.id == id).name;
  }
}