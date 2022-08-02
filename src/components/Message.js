import {useState} from 'react'
import React  from 'react';

export default function RemoveMessage(props){
  function RemoveTracker(index){
  	const newTracker = [...props.tracks]
  	newTracker.splice(index, 1)
  	props.setNewTracks(newTracker)
  	props.setMessage(props.message , '')
  }
	return(
		<div className="message-wrapper">
			<div className="message"> 
				<h1>Do you really want to delete this tracker?</h1>
				<button onClick={()=>{RemoveTracker(props.index)}}>Delete</button>
				<button onClick={props.messageClear}>Cancel</button>
			</div>          
		</div>
		)
}