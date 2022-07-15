import '../index.css';
import {useState} from 'react'
import React from 'react';

function AddTrack(props) {
  return (
    <div className="AddTrack">
        <input type="text" placeholder="Enter track name" onChange={props.TrackName}  onKeyDown={props.CreateNewTrack}/>
        <button onClick={props.CreateNewTrack}>
          <span className="material-icons">
            play_circle
          </span>
        </button>
    </div>
  );
}

export default AddTrack;
