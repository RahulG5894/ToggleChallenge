import { useState } from "react";


const ToggleChallenge = () => {
    const [toggle, setToggle] = useState(false);

    return <>
        <h2> Toggle Challenge</h2>
        {
            toggle ? <ErrorComponent/> : <SuccessComponent/>            
        }
        <button onClick={() => setToggle(!toggle)}>Check</button>
    </>
};

const ErrorComponent = () => {
    return <h2 style={{color: "red"}}>ERROR</h2>
}

const SuccessComponent = () => {
    return <h2 style={{color: "green"}}>SUCCESS</h2>
}

export default ToggleChallenge;