import React from 'react';
import "./DoubleRoomInfo.css";
import deluxDoubleRoom from "./images/Delux-double-room.jpg";


function DeluxDoubleRoomInfo() {
  return (
    <div className="room__info__container">
    <h1 className="room__info__hedding">Delux Double room</h1>
      <div className="room__info">
        <img src={deluxDoubleRoom} alt=""></img>
       
    </div>
    <div className="container">
      <div className="info">
        <div className="info__list">
          <h5>General Info</h5>
          <ul className="info__items">
            <li>Bed: 1 double bed</li>
            <li>Rooom size: 10sqf</li>
          </ul>
        </div>

       

        <div className="info__list">
          <h5>In bathroom</h5>
          <ul className="info__items">
            <li>Toiletries</li>
            <li>Toilet</li>
            <li>Bath & shower</li>
            <li>Towels</li>
            <li>Hairdryer</li>
            <li>Toilet Paper</li>
          </ul>
        </div>

        <div className="info__list">
          <h5>Included</h5>
          <ul className="info__items">
            <li>Linen</li>
            <li>Hand Sanitizer</li>
            <li>Air conditioning</li>
            <li>Iron</li>
            <li>Electric kettle</li>
            <li>Balcony</li>
            <li>Clothes rack</li>
            <li>Wake up service</li>
            <li>Wardrobe /closet</li>
            <li>Tea / coffee maker</li>
            <li>Tea / coffee maker</li>
            <li>Safety deposit box</li>
            <li>Fan</li>
            <li>Tumble dryer</li>
            <li>Terrace</li>
            <li>Dry rack for clothing</li>
            <li>Executive lounge access</li>
          </ul>
        </div>
        <div className="info__list">
          <h5>Meal Plane</h5>
          <ul className="info__items">
            <li>Breakfast: Not available</li>
          </ul>
        </div>

        <div className="info__list">
          <h5>View</h5>
          <ul className="info__items">
            <li>Sea view</li>
          </ul>
        </div>
      </div>
    </div>
    <button className="button">make a reservation for 30 $</button>
  </div>
  );
}

export default DeluxDoubleRoomInfo;
