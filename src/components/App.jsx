import '../index.css';
import React from 'react';
import AddTrack from './AddTrack.jsx'
import {useState , useEffect} from 'react'


export default function App(){
	let date = new Date()
	let month = date.getMonth() + 1
	const [trackId, setTrackId] = useState(0)
	const [tracks, setNewTracks] = useState([])	  
	const [trackName , setTrackName] = useState(`${date.getDate()} / ${month.toString().padStart(2, '0')} / ${date.getFullYear()}`)
	function TrackName(e){
      	setTrackName(e.target.value)
      	if(!e.target.value){
      		setTrackName(`${date.getDate()}/${month.toString().padStart(2, '0')}/${date.getFullYear()}`)
      	}
  	}
  function handleKeyDown(e){
  	if (e.key === 'Enter') {
    setTrackId(trackId + 1)
    setNewTracks([...tracks , track])
    e.target.value = ''
	  if(!e.target.value){
	      		setTrackName(`${date.getDate()}/${month.toString().padStart(2, '0')}/${date.getFullYear()}`)
	  }
		}
  }
  const track = {
  id: trackId ,
  value : 	<div>
         		<h4>{trackName}</h4>
        	</div>
    }
  function CreateNewTrack(){
    setTrackId(trackId + 1)
    setNewTracks([...tracks , track])
  }
    const TrackList = tracks.map((track)=>
    <li key={track.id}>
      {track.value}
    </li>
  )	

	return(
	    <div className="App">
	      <div className="tracker">
	        <h1>Tracker</h1>
	        <AddTrack TrackName = {TrackName} CreateNewTrack={CreateNewTrack} handleKeyDown={handleKeyDown}/>
	      </div>
	      <div className="trackList">
	      	<ul>
	      		{TrackList}
	      	</ul>
	      </div>
	    </div>
	)
}