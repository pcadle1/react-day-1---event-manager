import React from "react"

const PillButton = (props) => {
	const handleClick = () => {
		alert("Take one dose red pill, two doses of the purple pills")
	}

	return (
		<button type="button" className="pill-button" onClick={handleClick}>
			Dose
		</button>
	)
}

export default PillButton
