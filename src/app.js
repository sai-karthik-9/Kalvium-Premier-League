//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName,managerAge,currentTeam,trophiesWon){
  let details=[managerName,managerAge,currentTeam,trophiesWon];
  return details;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
 if(formation.length==0){
  return null;
 }
 var play=
 {
  defender:formation[0],
  midfield:formation[1],
  forward:formation[2]
 }
 return play;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  return players.filter(player => player.debut == year);
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  return players.filter(player=>player.position===position);
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  return players.filter(player => {
    return player.awards.some(award => award.name === awardName);
});
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  return players.filter(player => {      
      const awardCount = player.awards.filter(award => award.name === awardName).length;
      return awardCount === noOfTimes;
  });
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  return players.filter(player => {
      
      const hasAward = player.awards.some(award => award.name === awardName);
      
      const fromCountry = player.country === country;
     
      return hasAward && fromCountry;
  });
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  return players.filter(player => {
      
      const hasEnoughAwards = player.awards.filter(award => award.name).length >= noOfAwards;
     
      const belongsToTeam = player.team === team;
      
      const isYoungerThanAge = player.age < age;
      
      return hasEnoughAwards && belongsToTeam && isYoungerThanAge;
  });
}

//Progression 9 - Sort players in descending order of their age
function sortByAge(){
  return players.slice().sort( (a,b)=> b.age-a.age );
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilrerByTeamxSortByNoOfAwards(team){
  let filteredPlayers=players.filter
  return filteredPlayers.sort((a,b)=>b.awards.length-a.awards.length).filter(player=>player.team===team);
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName,noOfTimes,country){
  const filteredPlayers = players.filter(player => {
    const awardCount = player.awards.filter(award => award.name === awardName).length;
    return awardCount === noOfTimes && player.country === country;
});
return filteredPlayers.sort((a,b)=> a.name.localeCompare(b.name));
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function sortByNamexOlderThan(age){
  var d=players.filter(player=>player.age>age);
  return d;
}