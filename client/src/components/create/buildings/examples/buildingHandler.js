import hotel5 from "./hotelFiveStory";
import sf6000 from "./sf6000SqFtLot";

const BUILDINGS = {
  hotel5: hotel5,
  sf6000: sf6000
};

export default selection => {
  return BUILDINGS[selection];
};
