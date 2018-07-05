import hotel5 from './hotelFiveStory';
import sf3 from './sfModerateLot';

const BUILDINGS = {
    hotel5: hotel5,
    sf3: sf3
  };
  
export default (selection) => {
    // const Handler = BUILDINGS[selection] || "FourOhFourPage";

    return BUILDINGS[selection]
};