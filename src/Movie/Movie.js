import React, { Component } from "react";
import { seatArr } from "./Data";

export default class Movie extends Component {
  renderListGlasses = () => {
    return seatArr.map((item, index) => {
      console.log(
        "🚀 ~ file: Movie.js:6 ~ Movie ~ returnthis.props.seatArr.map ~ item:",
        item
      );
      console.log(
        "🚀 ~ file: Movie.js:15 ~ Movie ~ returnseatArr.map ~ soGhe:",
        item.danhSachGhe.soGhe
      );
      return (
        <div key={index}>
          <button>{item.hang}</button>
          <button>{item.danhSachGhe.soGhe}</button>
        </div>
      );
    });
  };
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(./img/bgmovie.jpg)`,
          backgroundSize: `cover`,
          height: `100vh`,
          backgroundPosition: `center`,
        }}
      >
        Movie
        {this.renderListGlasses()}
      </div>
    );
  }
}
