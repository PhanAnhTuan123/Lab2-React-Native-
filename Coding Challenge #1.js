const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const determineWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins > avgKoalas) {
        console.log(`Dolphins win (${avgDolphins.toFixed(2)} vs. ${avgKoalas.toFixed(2)})`);
    } else if (avgKoalas > avgDolphins) {
        console.log(`Koalas win (${avgKoalas.toFixed(2)} vs. ${avgDolphins.toFixed(2)})`);
    } else {
        console.log(`It's a draw (${avgDolphins.toFixed(2)} vs. ${avgKoalas.toFixed(2)})`);
    }
};

const determineWinnerWithMinScore = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 100 && avgDolphins > avgKoalas) {
        console.log(`Dolphins win (${avgDolphins.toFixed(2)} vs. ${avgKoalas.toFixed(2)})`);
    } else if (avgKoalas >= 100 && avgKoalas > avgDolphins) {
        console.log(`Koalas win (${avgKoalas.toFixed(2)} vs. ${avgDolphins.toFixed(2)})`);
    } else {
        console.log('No team wins');
    }
};

const determineWinnerWithMinScoreAndDraw = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 100 && avgKoalas >= 100) {
        if (avgDolphins > avgKoalas) {
            console.log(`Dolphins win (${avgDolphins.toFixed(2)} vs. ${avgKoalas.toFixed(2)})`);
        } else if (avgKoalas > avgDolphins) {
            console.log(`Koalas win (${avgKoalas.toFixed(2)} vs. ${avgDolphins.toFixed(2)})`);
        } else {
            console.log(`It's a draw (${avgDolphins.toFixed(2)} vs. ${avgKoalas.toFixed(2)})`);
        }
    } else {
        console.log('No team wins');
    }
};

const scoresDolphins1 = [96, 108, 89];
const scoresKoalas1 = [88, 91, 110];

const avgDolphins1 = calcAverage(...scoresDolphins1);
const avgKoalas1 = calcAverage(...scoresKoalas1);

console.log('Data 1:');
determineWinner(avgDolphins1, avgKoalas1);

const scoresDolphinsBonus2 = [97, 112, 101];
const scoresKoalasBonus2 = [109, 95, 106];

const avgDolphinsBonus2 = calcAverage(...scoresDolphinsBonus2);
const avgKoalasBonus2 = calcAverage(...scoresKoalasBonus2);

console.log('Data Bonus 2:');
determineWinnerWithMinScoreAndDraw(avgDolphinsBonus2, avgKoalasBonus2);
