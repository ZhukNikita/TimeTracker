import '../index.css';
import React from 'react';
import AddTrack from './AddTrack.jsx'
import {useState , useEffect} from 'react'


export default function App(){
	let date = new Date()
	let month = date.getMonth() + 1
	const [trackId, setTrackId] = useState(0)
	const [tracks, setNewTracks] = useState([])	  
	const [trackName , setTrackName] = useState('')
	function TrackName(e){
      	setTrackName(e.target.value)
      	if(!e.target.value){
      		setTrackName([date.getDate() , month.toString().padStart(2, '0') , date.getFullYear()].join('/'))
      	}
  	}
  	const track = {
  id: trackId ,
  value : 	<div>
         		<h4>{trackName}</h4>
        	</div>
    }
  function CreateNewTrack(e){
  	if (e.key === 'Enter') {
    setTrackId(trackId + 1)
    setNewTracks([...tracks , track])
	}
  }
    const TrackList = tracks.map((track)=>
    <li key={track.id}>
      {track.value}
    </li>
  )
    var LocalValue = localStorage.setItem('key' , trackName)
    console.log(localStorage.getItem('key'))
	return(
	    <div className="App">
	      <div className="tracker">
	        <h1>Tracker</h1>
	        <AddTrack TrackName = {TrackName} CreateNewTrack={CreateNewTrack} />
	      </div>
	      <div className="trackList">
	      	{TrackList}
	      </div>
	    </div>
	)
}