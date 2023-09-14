import React, { Component } from "react";
import { connect } from "react-redux";
import { bookingAction } from "./Actions/MovieAction";

class Seats extends Component {
  renderRowNumber = () => {
    return this.props.seat.danhSachGhe.map((item, index) => {
      return <button className="rowNumber">{item.soGhe}</button>;
    });
  };
  renderSeats = () => {
    if (this.props.rowSeat === 0) {
      return (
        <div className="ml-3">
          {this.props.seat.hang}
          {this.renderRowNumber()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.seat.hang}
          {this.props.seat.danhSachGhe.map((seat, index) => {
            let book = "";
            let disable = false;
            // Trang thai da dat
            if (seat.daDat) {
              book = "gheDuocChon";
              disable = true;
            }
            //Xet trang thai dang dat
            let booking = "";
            let indexBooking = this.props.listSeats.findIndex(
              (booking) => booking.soGhe === seat.soGhe
            );
            if (indexBooking !== -1) {
              booking = "gheDangChon";
            }
            return (
              <button
                onClick={() => {
                  this.props.datGhe(seat);
                }}
                disabled={disable}
                className={`ghe ${book} ${booking}`}
                key={index}
              >
                {seat.soGhe}
              </button>
            );
          })}
        </div>
      );
    }
  };
  render() {
    return (
      <div className="text-light text-left mt-2" style={{ fontSize: 20 }}>
        {this.renderSeats()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listSeats: state.MovieReducer.listSeats,
  };
};

const mapDisPatchToProps = (dispatch) => {
  return {
    datGhe: (seat) => {
      dispatch(bookingAction(seat));
    },
  };
};

export default connect(mapStateToProps, mapDisPatchToProps)(Seats);
