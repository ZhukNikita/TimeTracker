import '../index.css';
import React  from 'react';
import AddTrack from './AddTrack.js'
import TrackerList from './TrackerList.js'
import {useState , useEffect} from 'react'

export default function App(){
	var date = new Date()
	var month = date.getMonth() + 1
	var defaultTrackName = `${date.getDate()}/${month.toString().padStart(2, '0')}/${date.getFullYear()}`
	const [message , setMessage] = useState('') 
	const [id , setId] = useState(0) 
	const [trackName , setTrackName] = useState(defaultTrackName)
	const [tracks, setNewTracks] = useState(() => {
	const saved = localStorage.getItem('key')
	const initialValue = JSON.parse(saved)
	return initialValue || []
	})
	const[timeOn , setTimeOn] = useState(() => {
		if(tracks[id]){
			return tracks[id].timeOn
		}else{
		return false}
	})
	const[time , setTime] = useState(() => {
		if(tracks[id]){
			return tracks[id].time
		}else{
	return 0}
	})
	const timer = (()=>{
		if(tracks[id]){
			return  tracks[id].time 
		}else {
			return 0 
		}
	})
	var trackerBody = {name : trackName , time : timer() , timeOn : timeOn};
  useEffect(()=>{
  	localStorage.setItem('key' ,  JSON.stringify(tracks))
  } , [tracks] )	

  function CreateNewTrack(){
  	const newTracker = [trackerBody , ...tracks]
  	setNewTracks(newTracker)
  	setTimeOn(true)
  	setId(id + 1)
  }
  function RemoveTracker(index){
  	const newTracker = [...tracks]
  	newTracker.splice(index, 1)
  	setNewTracks(newTracker)
  	setMessage(message , '')
  }

  const TrackList = tracks.map((tracker , index)=>
  <TrackerList 
  	key={index}  
  	index={index}  
  	tracker = {tracker}
  	trackerValue = {tracker.name} 
  	message={message}
  	setMessage={setMessage} 
  	RemoveTracker={RemoveTracker}
  	setTimeOn={setTimeOn}
  	setTime={setTime}
  	timeOn={timeOn}
  	time = {time}
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