import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'result'})
export class ResultPipe implements PipeTransform {
  transform(result: {winner: number, loser: number}): string {
      return `${result.winner} x ${result.loser}`;
  }
}