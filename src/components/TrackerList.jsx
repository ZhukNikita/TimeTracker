import '../index.css';
import React , {useState}  from 'react';
import RemoveMessage from './Message.jsx'

export default function TrackerList(props){
	
	function Message(){
	var message =  <RemoveMessage messageClear = {props.messageClear} RemoveTracker={props.RemoveTracker} index={props.index}/>
	props.updateMessage(message)
	}  
	return(
		<li  className="tracker">
	      {props.trackerValue}
	      <div className="trackerButtons">
		      <button className="start">
		      	<span className="material-icons">
		            play_circle
		        </span>
		      	<span className="material-icons">
					pause_circle
				</span>
			  </button>
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
// ()=>props.RemoveTracker(props.index)