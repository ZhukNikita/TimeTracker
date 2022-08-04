import '../index.css';
import {useState} from 'react'
import React from 'react';

function AddTrack({CreateNewTrack , setTrackName}) {
    var date = new Date()
    var month = date.getMonth() + 1
    var defaultTrackName = `${date.getDate()}/${month.toString().padStart(2, '0')}/${date.getFullYear()}`

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
