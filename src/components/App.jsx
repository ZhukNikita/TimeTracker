import '../index.css';
import React  from 'react';
import AddTrack from './AddTrack.jsx'
import TrackerList from './TrackerList.jsx'
import {useState} from 'react'

export default function App(){
	let date = new Date()
	let month = date.getMonth() + 1
	let defaultTrackName = `${date.getDate()}/${month.toString().padStart(2, '0')}/${date.getFullYear()}`
	const [tracks, setNewTracks] = useState([])  
	const [message , setMessage] = useState('') 
	const [trackName , setTrackName] = useState(defaultTrackName)
  const tracker = {
	  value : <div>
	         		<h4>{trackName}</h4>
	        	</div>
    }

	function TrackName(e){
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

  function updateMessage(message){
  	setMessage(message , message)
  }
  function messageClear(){
	  setMessage(message , '')
	}

  function CreateNewTrack(){
    const newTracker = [...tracks , tracker]
    setNewTracks(newTracker);
    toLocal()
  }
  function RemoveTracker(index){
  	const newTracker = [...tracks]
  	newTracker.splice(index, 1)
  	setNewTracks(newTracker)
  	setMessage(message , '')
  }

  function toLocal(){
  	// localStorage.setItem('key' , JSON.stringify(tracks))
  }
  const TrackList = tracks.map((tracker , index)=>
  <TrackerList 
  	key={index}  
  	index={index} 
  	updateMessage={updateMessage} 
  	trackerValue = {tracker.value} 
  	message={message} 
  	RemoveTracker={RemoveTracker}
  	messageClear={messageClear}
  />
  )	
	return(
	    <div className="App">
	      <div className="TimeTracker">
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