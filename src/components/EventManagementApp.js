import React from "react"
import EventList from "./EventList"
import DogImageComponent from "./DogImageComponent"
import PillButton from "./PillButton"
const events = [
	{
		title: "Brunch with Werewolves",
		timePeriod: "10:00am - 12:00pm",
		description: null,
		eventType: "personal",
	},
	{
		title: "Strategy Meeting with the Finfolk on New Import Tariffs",
		timePeriod: "1:00pm - 2:00pm",
		description: "The World Wizardry Workgroup hit us hard on these tariffs.",
		eventType: "business",
	},
	{
		title: "Award Ceremony for Amrita the Banshee",
		timePeriod: "2:00pm - 3:00pm",
		description: "Bring earplugs, have fun.",
		eventType: "business-casual",
	},
	{
		title: "Djinn Tech Support with the Qamar and Caliope",
		timePeriod: "4:00pm - 5:00pm",
		description: "Computers are down, let them work their magic.",
		eventType: "business",
	},
]

const dogImageObject = {
    text: "The day may be ruff, but we are here for you in spirit!",
    src: "https://horizon-production.s3.amazonaws.com/images/challenge/event-manager/event-manager-dogs.jpg"
    }

const EventManagementApp = (props) => {
	return (
		<div className="event-management-app">
			<PillButton />
			<h1>Now viewing your upcoming events</h1>
			<EventList events={events} />
            <DogImageComponent dogObject={dogImageObject}/>
		</div>
	)
}

export default EventManagementApp
