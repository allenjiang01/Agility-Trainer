import React, {useState, useRef} from "react";
import "./ConfigField.css"


function ConfigField(props) {
    
    const [time, setTime] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [msgVisibility, setMsgVisibility] = useState(false);

    const timeRef = useRef(0);
    const speedRef = useRef(0);

    function handleSubmit(event) {
        event.preventDefault(); // Prevents the default form submission behavior

        const newTime = timeRef.current.value;
        const newSpeed = speedRef.current.value;

        setTime(newTime);
        setSpeed(newSpeed);
        setMsgVisibility(true);
        props.function(newTime, newSpeed); // Pass the values back to the parent component
    };

    return (
        <div className="configForm">
            <form onSubmit={handleSubmit}>
                <label>Time: </label>
                <input type="text" id="time" name="time" ref={timeRef}
                    defaultValue={time}></input> &nbsp;
                <label>Speed: </label>
                <input type="text" id="speed" name="speed" ref={speedRef}
                    defaultValue={speed}></input> &nbsp;
                <input type="submit" value="Update"></input>
            </form>
            <br></br>
            Current setting: Time = {time}, Speed = {speed}
            <div className="updateMessage" 
            style={{visibility: msgVisibility ? "visible" : "hidden"}}>
                Setting successfully updated!</div>
        </div>
    );
};

export default ConfigField;