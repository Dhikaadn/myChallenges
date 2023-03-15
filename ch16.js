const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  
  // Task 01
  let goalsStr = '';
  let i = 0;
  for (const player of game.scored) {
    i++;
    console.log(`Goal ${i}: ${player} `);
  }
  
  // Task 02
  let sum = 0,
    j = 0;
  for (const odds of Object.values(game.odds)) {
    j++;
    sum += odds;
  }
  console.log(`The avarege odd is ${sum / j}.`);
  
  // Task 03
  let oddsStr = ['Odd of victory ', 'Odd of draw', 'Odd of victory '];
  
  oddsStr[0] += game.team1 + ': ';
  oddsStr[1] += ': ';
  oddsStr[2] += game.team2 + ': ';
  
  let m = 0;
  
  for (const odds01 of Object.values(game.odds)) {
    oddsStr[m] += odds01;
    m++;
  }
  console.log(oddsStr);