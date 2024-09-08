const game = {
    team1: [
        'Manuel Neuer', 'Joshua Kimmich', 'Niklas Sule', 'Lucas Hernandez', 'Alphonso Davies', 
        'Leon Goretzka', 'Joshua Kimmich', 'Thomas Muller', 'Serge Gnabry', 'Robert Lewandowski', 
        'Kingsley Coman'
    ],
    team2: [
        'Edouard Mendy', 'Reece James', 'Thiago Silva', 'Ben Chilwell', 'Jorginho', 
        'N’Golo Kante', 'Mason Mount', 'Hakim Ziyech', 'Timo Werner', 'Kai Havertz', 
        'Christian Pulisic'
    ],
    odds: {
        team1: 1.5,
        draw: 3.0,
        team2: 4.0
    }
};


const players1 = game.team1;
const players2 = game.team2;
const gk = players1[0];
const fieldPlayers = players1.slice(1);
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const { team1, draw, team2 } = game.odds;
const printGoals = (...playerNames) => {
    console.log(`Goals scored by: ${playerNames.join(', ')}`);
    console.log(`Total number of goals: ${playerNames.length}`);
};
console.log(team1 < team2 && 'Team 1 is more likely to win' || 'Team 2 is more likely to win');
printGoals('Robert Lewandowski', 'Serge Gnabry', 'Thomas Muller');
