import React, { Component } from "react";
import "./asset/style.css";
import ConfirmBooking from "./ConfirmBooking";
import { seatArr } from "./Data";
import Seats from "./Seats";

export default class Movie extends Component {
  renderSeats = () => {
    return seatArr.map((item, index) => {
      return (
        <div key={{ index }}>
          <Seats rowSeat={index} seat={item} />
        </div>
      );
    });
  };
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(./img/bgmovie.jpg)`,
          position: "fixed",
          height: `100%`,
          width: "100%",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-8 text-center">
                <h1 className="text-info">Đặt vé xem phim</h1>
                <div className="mt-3 text-light" style={{ fontSize: "25px" }}>
                  Màn hình
                </div>
                <div
                  className="mt-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                </div>
                {this.renderSeats()}
              </div>
              <div className="col-4">
                <h1 className="text-info">Danh sách ghế đã chọn</h1>
                <ConfirmBooking />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
