import '../index.css';
import {useState} from 'react'
import React from 'react';

function AddTrack(props) {
  
    function TrackerName(e){
        props.setTrackName(e.target.value)
        if(!e.target.value){
          props.setTrackName(props.defaultTrackName)
        }
    }
      function handleKeyDown(e){
    if (e.key === 'Enter') {
    props.CreateNewTrack();
    e.target.value = ''
    if(!e.target.value){
      props.setTrackName(props.defaultTrackName)
    }
    }
  }
  return (
    <div className="AddTrack">
        <input 
          type="text"
          placeholder="Enter tracker name"
          onChange={TrackerName} 
          onKeyDown={handleKeyDown}
          maxLength="25"
        />
        <button type="reset" onClick={props.CreateNewTrack}>
          <span className="material-icons">
            play_circle
          </span>
        </button>
    </div>
  );
}

export default AddTrack;
