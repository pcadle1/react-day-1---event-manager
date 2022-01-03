import React from "react"

const EventTile = (props) => {
	console.log(props)
	const { title, timePeriod, description, eventType } = props.event

	let eventClassName = getClassName(eventType)
	const handleClick = () => {
        debugger
		eventClassName = "grey-bg"
	}

	return (
		<div className={eventClassName}>
			<h1>{title}</h1>
			<p>{timePeriod}</p>
			<p>Reminder: no silverware</p>
			<button type="button" onClick={handleClick}>
				Completed
			</button>
		</div>
	)
}

function getClassName(eventType) {
	switch (eventType) {
		case "personal":
			return "green-bg"
		case "business-casual":
			return "pink-bg"
		case "business":
			return "blue-bg"
		default:
			return ""
	}
}

export default EventTile
