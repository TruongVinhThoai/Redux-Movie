import { DAT_GHE, HUY_GHE } from "../Types/MovieTypes";

const initialState = { listSeats: [] };

let MovieReducer = (state = initialState, { type, seat, numberSeat }) => {
  switch (type) {
    case DAT_GHE: {
      let listSeatsUpdate = [...state.listSeats];
      let index = listSeatsUpdate.findIndex(
        (booking) => booking.soGhe === seat.soGhe
      );
      if (index !== -1) {
        listSeatsUpdate.splice(index, 1);
      } else {
        listSeatsUpdate.push(seat);
      }
      state.listSeats = listSeatsUpdate;
      return { ...state };
    }
    case HUY_GHE: {
      let listSeatsUpdate = [...state.listSeats];
      let index = listSeatsUpdate.findIndex(
        (booking) => booking.soGhe === numberSeat
      );
      if (index !== -1) {
        listSeatsUpdate.splice(index, 1);
      }
      state.listSeats = listSeatsUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default MovieReducer;
