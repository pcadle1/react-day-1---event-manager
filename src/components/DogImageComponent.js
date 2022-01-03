import React from "react";

const DogImageComponent = (props) => {
    return(
        <div>
            <img src={props.dogObject.src} alt="image of dog"/>
            <p>{props.dogObject.text}</p>
        </div>

    )
}

export default DogImageComponent