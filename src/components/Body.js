import React from "react";
import "./Body.css";
import { FaMapMarker } from "react-icons/fa";


export default function Body(props) {
    console.log(props);
  return (
    <div className="body">
      <div className="places">
        <img src={props.item.imageUrl} className="image"></img>
    
      <div className="leftContainer">
        <div className="line1">
          <FaMapMarker className="map" />
          <p className="jap">{props.item.location}</p>
          <p className="google"> <a href={props.item.googleMapsUrl}>View on Google Maps</a></p>

        </div>
        <div className="placeName">{props.item.title}</div>
        <div className="line3">{props.item.startDate} - {props.item.endDate}</div>
        <div className="line4">{props.item.description}</div>
      </div>
      </div>
    </div>
  );
}
