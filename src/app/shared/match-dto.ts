export interface MatchDTO {
    winners: {
        left: number;
        right: number;
    };

    losers: {
        left: number;
        right: number;
    };

    result: {
        winner: number;
        loser: number;
    };
}