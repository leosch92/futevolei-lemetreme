import { Player } from './player';

export interface Match {
    winners: {
        left: Player;
        right: Player;
    };
    
    losers: {
        left: Player;
        right: Player;
    };

    result: {
        winner: number;
        loser: number;
    }
}