import '../index.css';
import React , {useState , useEffect}  from 'react';
import RemoveMessage from './Message.js'

export default function TrackerList(props){

	useEffect(()=>{
		let interval = null;
		if(props.tracks[props.index].timeOn){
			interval = setInterval(()=>{
		props.setTime(prevState => prevState + 10)
	} , 10)}
			else{
				clearInterval(interval)
			}
			return ()=> clearInterval(interval); 
	},[props.tracks[props.index].timeOn])
	   useEffect(()=>{
      props.setNewTracks(prevState => {
			const newState = [...prevState]
			newState[props.index].timeOn = props.timeOn
			return newState
		})
  		props.setNewTracks(prevState => {
		const newState = [...prevState]
		newState[props.index].time = props.time
		return newState
	})
  } , [props.timeOn ] )

	function Message(){
	var message =  <RemoveMessage 
						messageClear = {props.messageClear}
						RemoveTracker={props.RemoveTracker}
						index={props.index}
					/>
	props.setMessage(message)
	}
	function messageClear(){
	  props.setMessage(message , '')
	}
	return(
		<li  className="tracker">	
			<h4>{props.trackerValue}</h4>
			<div>
				<span>{('0' + Math.floor(props.time / 100000) % 100).slice(-2)}:</span>
				<span>{('0' + Math.floor((props.time / 60000) % 60)).slice(-2)}:</span>
				<span>{('0' + Math.floor((props.time / 1000) % 60)).slice(-2)}:</span>
				<span>{('0' + (props.time / 10) % 100).slice(-2)}</span>
			</div>
	        <div className="trackerButtons">
		      	{!props.timeOn && (
		      		<button className="start" onClick={()=>{
		      			props.setTimeOn(true)}
		      		}
		      			>
	      		    	<span className="material-icons">
	      		        	play_circle
		      			</span>
		      		</button>
		      	)}
			  	{props.timeOn && (
			  		<button className="pause" onClick={()=>{
			  			props.setTimeOn(false)
			  		}}>
			  		    <span className="material-icons">
			  		    	pause_circle
			  		    </span>
			  		</button>
			  	)}
		      <button className="delete" onClick={Message}>
		      	<span className="material-icons">
					remove
				</span>
		      </button>
		    </div>
		    {props.message}
	    </li>
	)
}

	 //  useEffect(()=>{
		// props.setNewTracks(prevState => { // Запись в локал стор при изминении времени
		// 	const newState = [...prevState]
		// 	newState[props.index].time = props.time
		// 	return newState
		// })
  // } , [props.time] )