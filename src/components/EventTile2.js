import React from "react"

class EventTile2 extends React.Component {
	constructor(props) {
		super(props)
		this.state = { clicked: false }
        this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.setState({
            clicked: true
        })
	}

	getClassName(eventType) {
		if (this.state.clicked) {
			return "grey-bg"
		}
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

	render() {
		const { title, timePeriod, description, eventType } = this.props.event
		return (
			<div className={this.getClassName(eventType)}>
				<h1>{title}</h1>
				<p>{timePeriod}</p>
				<p>Reminder: no silverware</p>
				<button type="button" onClick={this.handleClick}>
					Completed
				</button>
			</div>
		)
	}
}
export default EventTile2
