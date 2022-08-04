import '../index.css';
import React , {useState , useEffect}  from 'react';
import RemoveMessage from './Message.js'

export default function TrackerList(props){
	var date = new Date()
	const [message , setMessage] = useState('');
	const [timeOn , setTimeOn] = useState(()=>{
		if(props.tracks[props.index]){
			return props.tracks[props.index].timeOn
		}else{
			return 0
		}
	})
	const[time , setTime] = useState(()=>{
		if(props.tracks[props.index]){
			return props.tracks[props.index].time
		}else{
			return 0
		}
	})
	const[unloadTime , setUnloadTime] = useState(()=>{
		if(props.tracks[props.index]){
			return props.tracks[props.index].unloadTime
		}else{
			return 0
		}
	})
	const[loadTime , setLoadTime] = useState(()=>{
		if(props.tracks[props.index]){
			return props.tracks[props.index].loadTime
		}else{
			return 0
		}
	})
	document.addEventListener("DOMContentLoaded", () => {
		alert("DOM готов!");
	});
	useEffect(()=>{
		props.setNewTracks(prevState => {
		const newState = [...prevState]
		newState[props.index].loadTime = date.getTime();
		return newState
	})},[])
	window.onbeforeunload = () => {
		props.setNewTracks(prevState => {
		const newState = [...prevState]
			newState[props.index].time = time;
			newState[props.index].unloadTime = date.getTime();
		return newState
		})
	};
	useEffect(()=>{
		let interval = null;
		if(timeOn){
			interval = setInterval(()=>{
		setTime(prevState => prevState + 10)
	} , 10)}
			else{
				clearInterval(interval)
			}
			return ()=> clearInterval(interval);
	},[timeOn])

	function Message(){
	var messageText =  <RemoveMessage
						messageClear = {messageClear}
						index={props.index}
						message = {message}
						setMessage={setMessage}
						tracks= {props.tracks}
						setNewTracks={props.setNewTracks}
					/>
	setMessage(messageText)
	}
	function messageClear(){
	  setMessage(message , '')
	}
	return(
		<li  className="tracker">
			<h4>{props.trackerValue}</h4>
			<div>
				<span>{('0' + Math.floor(time / 3600000) % 100).slice(-2)}:</span>
				<span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
				<span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
				<span>{('0' + (time / 10) % 100).slice(-2)}</span>
			</div>
	        <div className="trackerButtons">
		      	{!timeOn && (
		      		<button className="start" onClick={()=>{
		      			setTimeOn(true)
		      			props.setNewTracks(prevState => {
							const newState = [...prevState]
							newState[props.index].timeOn = !timeOn;
							newState[props.index].time = time;
							return newState
						})
		      		}}
		      			>
	      		    	<span className="material-icons">
	      		        	play_circle
		      			</span>
		      		</button>
		      	)}
			  	{timeOn && (
			  		<button className="pause" onClick={()=>{
		      			setTimeOn(false)
						props.setNewTracks(prevState => {
							const newState = [...prevState]
							newState[props.index].timeOn = !timeOn;
							newState[props.index].time = time;
							return newState
						})
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
		    {message}
	    </li>
	)
}
