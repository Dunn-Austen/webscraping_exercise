var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://www.nba.com/scores#/')
  .evaluate(function() {
    const teamNameNodes = document.querySelectorAll('.score-tile__team-name');
    const list = [].slice.call(teamNameNodes);
    const teamNames = list.map(team => {
      return team.innerText
    });
    return teamNames
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
