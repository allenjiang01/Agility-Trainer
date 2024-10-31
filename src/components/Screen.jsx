import React, {useState, useEffect} from "react";
import "./Screen.css";

function Screen(props) {
    let topLeft = { bottom: "calc(100% - 75px)", left: "0" };
    let topRight = { bottom: "calc(100% - 75px)", right: "0px" };
    let bottomLeft = { bottom: "0", left: "0" };
    let bottomRight = { bottom: "0", right: "0" };
    let positions = [topLeft, topRight, bottomLeft, bottomRight];



    const [time, setTime] = useState(props.time);
    const [speed, setSpeed] = useState(props.speed);
    const [targetVisibility, setTargetVisibility] = useState(false);
    const [buttonVisibility, setButtonVisibility] = useState(true);
    const [targetPosition, setTargetPosition] = useState(positions[0]);

    // Set initial values when the component mounts
    useEffect(() => {
        setTime(props.time);
        setSpeed(props.speed);
    }, [props.time, props.speed]);
    

    const delay = (s) => new Promise(resolve => setTimeout(resolve, s*1000));

    async function start() {
        setButtonVisibility(false);
        let s = speed;
        for (let t = time; t > 0; t--) {
            let pos = Math.floor(Math.random() * 4);
            setTargetPosition(positions[pos]); // Update position
            setTargetVisibility(true);
            await delay(s); // Wait for the delay
            setTargetVisibility(false);
            await delay(1)
        }
        setButtonVisibility(true);
    }


    return (
        <div className="Screen-frame">
            <img src="/resources/court.png" className="Overlay" />
            <button onClick={start} style={{visibility: buttonVisibility ? "visible" : "hidden"}}>Start</button>
            <img src="/resources/shuttlecock.png" className="Target" style={{
                ...targetPosition, 
                visibility: targetVisibility ? "visible" : "hidden",
                }}></img>

        </div>
    );
};

export default Screen;