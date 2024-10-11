import React, {useState} from "react";
import ConfigField from "./ConfigField";
import Screen from "./Screen";

function Homepage() {

    const [time, setTime] = useState(0);
    const [speed, setSpeed] = useState(0);

    function handleConfigUpdate(t, s) {
        setTime(t);
        setSpeed(s);
    }

    return (
        <div className="App">
            <ConfigField function={handleConfigUpdate}/>
            <Screen />
        </div>
    )
}

export default Homepage;