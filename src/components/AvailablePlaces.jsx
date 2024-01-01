import React from "react";
import PropTypes from "prop-types";
import logoImg from "../assets/globe.png";
function AvailablePlaces(props) {
  return (
    <header>
      <img src={logoImg} alt="Stylized globe" />
      <h1>Wisata Liburan</h1>
      {/* <p>{userPlaces.length} yang telah kamu pilih</p> */}
    </header>
  );
}

AvailablePlaces.propTypes = {};

export default AvailablePlaces;
