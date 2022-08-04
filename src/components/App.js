
import React  from 'react';
import AddTrack from './AddTrack.js'
import TrackerList from './TrackerList.js'
import {useState , useEffect} from 'react'

export default function App(){

	const [trackName , setTrackName] = useState('')
	const [tracks, setNewTracks] = useState(() => {
	const saved = localStorage.getItem('key')
	const initialValue = JSON.parse(saved)
	return initialValue || []
	})
	var randomId = Math.random()
	const [id , setId] = useState(randomId)
	const[timeOn , setTimeOn] = useState(true)
	const[time , setTime] = useState(0)
	const[unloadTime , setUnloadTime] = useState(0)
	const[loadTime , setLoadTime] = useState(0)
	var trackerBody = { id: Math.random() , name : trackName , time : time , timeOn : timeOn , unloadTime: unloadTime , loadTime: loadTime}

		  useEffect(()=>{
  	localStorage.setItem('key' ,  JSON.stringify(tracks))
  } , [tracks] )	
  function CreateNewTrack(){
	setId(randomId)
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