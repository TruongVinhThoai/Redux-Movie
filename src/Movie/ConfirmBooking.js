import React, { Component } from "react";
import { connect } from "react-redux";
import { cancelSeat } from "./Actions/MovieAction";

class ConfirmBooking extends Component {
  render() {
    return (
      <div>
        <div className="mt-4 d-flex flex-column">
          <div>
            <button
              style={{ marginLeft: "-27px" }}
              className="gheDuocChon"
            ></button>
            <span className="text-light px-3" style={{ fontSize: "25px" }}>
              Ghế đã đặt
            </span>
          </div>
          <div>
            <button className="gheDangChon"></button>
            <span className="text-light px-3" style={{ fontSize: "25px" }}>
              Ghế đang đặt
            </span>
          </div>
          <div>
            <button style={{ marginLeft: "0" }} className="ghe"></button>
            <span className="text-light px-3" style={{ fontSize: "25px" }}>
              Ghế chưa đặt
            </span>
          </div>
        </div>
        <div className="mt-5">
          <table className="table">
            <thead>
              <tr className="text-light" style={{ fontSize: 25 }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Huỷ</th>
              </tr>
            </thead>
            <tbody className="text-success">
              {this.props.listSeats.map((booking, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <strong>{booking.soGhe}</strong>
                    </td>
                    <td>
                      <strong>{booking.gia.toLocaleString()}</strong>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          this.props.dispatch(cancelSeat(booking.soGhe));
                        }}
                      >
                        Huỷ
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="text-warning">
                <td>Tổng tiền</td>
                <td>
                  <strong>
                    {this.props.listSeats.reduce((total, booking, index) => {
                      return (total += booking.gia);
                    }, 0)}
                  </strong>
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listSeats: state.MovieReducer.listSeats,
  };
};

export default connect(mapStateToProps)(ConfirmBooking);
