import React, {useState} from "react";


function ConfigField(props) {
    
    const [time, setTime] = useState('');
    const [speed, setSpeed] = useState('');

    function handleSubmit(event) {
        event.preventDefault(); // Prevents the default form submission behavior
        props.function(time, speed); // Pass the values back to the parent component
    };

    function updateTime(event) {
        setTime(event.target.value);
    }

    function updateSpeed(event) {
        setSpeed(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Time: </label>
            <input type="text" id="time" name="time"  value={time}
                onChange={updateTime}></input><br/><br/>
            <label>Speed: </label>
            <input type="text" id="speed" name="speed" value={speed}
                onChange={updateSpeed}></input><br/><br/>
            <input type="submit" value="Submit"></input>
        </form>
    );
};

export default ConfigField;