import { DAT_GHE, HUY_GHE } from "../Types/MovieTypes";

export const bookingAction = (seat) => {
  return {
    type: DAT_GHE,
    seat,
  };
};

export const cancelSeat = (numberSeat) => {
  return {
    type: HUY_GHE,
    numberSeat,
  };
};
