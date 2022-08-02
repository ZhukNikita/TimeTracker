
import React  from 'react';
import AddTrack from './AddTrack.js'
import TrackerList from './TrackerList.js'
import {useState , useEffect} from 'react'

export default function App(){
	var date = new Date()
	var month = date.getMonth() + 1
	var defaultTrackName = `${date.getDate()}/${month.toString().padStart(2, '0')}/${date.getFullYear()}`

	const [trackName , setTrackName] = useState(defaultTrackName)
	const [id , setId] = useState(1)
	const [tracks, setNewTracks] = useState(() => {
	const saved = localStorage.getItem('key')
	const initialValue = JSON.parse(saved)
	return initialValue || []
	})
	const[timeOn , setTimeOn] = useState(true)
	const[time , setTime] = useState(0)
	var trackerBody = { id: id , name : trackName , time : time , timeOn : timeOn}

		  useEffect(()=>{
  	localStorage.setItem('key' ,  JSON.stringify(tracks))
  } , [tracks] )	
  function CreateNewTrack(){
	setId(id+1)
  	setTimeOn(true)
  	setTime(0)
  	const newTracker = [ trackerBody , ...tracks ]
  	setNewTracks(newTracker)
  }
  const TrackList = tracks.map((tracker , index)=>
  <TrackerList
	id ={tracker.id}
  	key={tracker.id}
  	index={index}
  	tracker = {tracker}
  	trackerValue = {tracker.name} 
  	tracks = {tracks}
  	setNewTracks = {setNewTracks}
  />
  )	
	return(
	    <div className="App">
	      <div className="TimeTracker">
	        <h1>Tracker</h1>
	        <AddTrack 
	        	setTrackName = {setTrackName}
	        	defaultTrackName = {defaultTrackName}
	        	CreateNewTrack={CreateNewTrack}
					/>
	      </div>
	      <div className="trackList">
	      	<ul>
	      		{TrackList}
	      	</ul>
	      </div>
	    </div>
	)
}