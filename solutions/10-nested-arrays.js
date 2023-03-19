// BEGIN
const countWins = (games, GEO) => games.filter(([score1, score2]) => { //Done
    if (GEO === 'canada') {
      return score1 > score2;
    }
    return score2 > score1;
  }).length;
  
  const getSuperSeriesWinner=(games)=>{
    const Canada=countWins(games, 'canada');
    const Ussr=countWins(games, 'ussr');
    if (Canada>Ussr){
      return 'canada';
    }
    if (Ussr>Canada){
      return 'ussr';
    }
    return null;
  };
  
  
  export default getSuperSeriesWinner;
// END