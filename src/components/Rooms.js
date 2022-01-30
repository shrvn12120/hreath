import React, { useState } from "react";
import "./Rooms.css";
import doubleRoom from "./images/Double-room.jpg";
import familyRoom from "./images/Family-room.jpg";
import deluxDoubleRoom from "./images/Delux-double-room.jpg";
import DoubleRoomInfo from "./DoubleRoomInfo";
import FamilyRoomInfo from "./FamilyRoomInfo";
import DeluxDoubleRoomInfo from "./DeluxDoubleRoomInfo";





const Rooms = () => {
    const  ReadMoreDoubleRoom=()=> {
    const [doubleRoom, setDoubleRoom] = useState(false);
    const [readLess, setReadLess] = useState(false);
    
    const DoubleRoom = (
        <div className="show_more_room_info">
            <button className="button close-btn"
            onClick={() => {
                setDoubleRoom(!doubleRoom, setReadLess(!doubleRoom));
            }}>close</button>
          <DoubleRoomInfo />
        </div>
      );
  return (
  <div>
          <button className="button" onClick={() => {setDoubleRoom(!doubleRoom, setReadLess(!doubleRoom));}}>
              {!readLess ? "Read more" : null}
          </button>
        
          <div className="col-3">
          {readLess && DoubleRoom}
        </div>
  </div>
  
  );
}
    const  ReadMoreFamilyRoom=()=> {
  const [familyRoom, setFamilyRoom] = useState(false);
  const [readLess, setReadLess] = useState(false);
  
  const FamilyRoom = (
      <div className="show_more_room_info">
          <button className="button close-btn"
          onClick={() => {
              setFamilyRoom(!familyRoom, setReadLess(!familyRoom));
          }}>close</button>
        <FamilyRoomInfo />
      </div>
    );
return (
<div>
        <button className="button" onClick={() => {setFamilyRoom(!familyRoom, setReadLess(!familyRoom));}}>
            {!readLess ? "Read more" : null}
        </button>
      
        <div className="col-3">
        {readLess && FamilyRoom}
      </div>
</div>

);
}
    const  ReadMoreDeluxDoubleRoom=()=> {
  const [deluxDoubleRoom, setDeluxDoubleRoom] = useState(false);
  const [readLess, setReadLess] = useState(false);
  
  const DeluxDoubleRoom = (
      <div className="show_more_room_info">
          <button className="button close-btn"
          onClick={() => {
            setDeluxDoubleRoom(!deluxDoubleRoom, setReadLess(!deluxDoubleRoom));
          }}>close</button>
        <DeluxDoubleRoomInfo />
      </div>
    );
return (
<div>
        <button className="button" onClick={() => {setDeluxDoubleRoom(!deluxDoubleRoom, setReadLess(!deluxDoubleRoom));}}>
            {!readLess ? "Read more" : null}
        </button>
      
        <div className="col-3">
        {readLess && DeluxDoubleRoom}
      </div>
</div>

);
}


    const RoomCategoris = (props) => {
    return (
      <div className="room-categoreis">
        <div className="card">
          <div className="room-img-cointainer">
          <h4>{props.roomName}</h4>
            <img src={props.img} alt={props.imgAlt} className="room-Img" />
          </div>

          <p>{props.description}</p>
          <p  className="price-tag">
            <span>{props.price}</span>
          </p>
          <div>{props.readMore}</div>
         
        </div>
      </div>
    );
  };
  return (
    <div className="rooms" id="rooms">
      <h2>OUR ROOMS</h2>
      <div className="container">
        <div className="room-content">
          <p>varity of room available in our guest house fell free to choose</p>
          <div className="content">
          <RoomCategoris
            roomName="Double Room"
            description="This double room has a balcony, executive lounge access and electric kettle."
            price="36 $"
            img={doubleRoom}
            imgAlt="family room image"
            readMore={<ReadMoreDoubleRoom />}
          />

          <RoomCategoris
            roomName="Family Room"
            description="This family room features a balcony, tea/coffee maker and view."
            price="36 $"
            img={familyRoom}
            imgAlt="family room image"
            readMore={<ReadMoreFamilyRoom />}
          />

          <RoomCategoris
            roomName="Deluxe Double Room"
            description="This double room has a balcony, air conditioning and dining area."
            price="36 $"
            img={deluxDoubleRoom}
            imgAlt="family room image"
           readMore={<ReadMoreDeluxDoubleRoom />}
          />
         
        </div>
        </div>
      
      </div>
    </div>
  );
};

export default Rooms;
