import '../index.css';
import {useState} from 'react'
import React from 'react';

function AddTrack({setTrackName , defaultTrackName , CreateNewTrack}) {
  
    function TrackerName(e){
        setTrackName(e.target.value)
        if(!e.target.value){
          setTrackName(defaultTrackName)
        }
    }
      function handleKeyDown(e){
    if (e.key === 'Enter') {
    CreateNewTrack();
    e.target.value = ''
    if(!e.target.value){
      setTrackName(defaultTrackName)
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
        <button type="reset" onClick={CreateNewTrack}>
          <span className="material-icons">
            play_circle
          </span>
        </button>
    </div>
  );
}

export default AddTrack;
