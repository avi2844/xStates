import React, { useEffect, useState } from "react";

const States = ({country, stateHandler, state, cityhandler}) => {
    const [states, setStates] = useState([]);

    async function fetchStates(){
        try {
            const res = await fetch(`https://crio-location-selector.onrender.com/country=${country}/states`);
            const data = await res.json();
            setStates(data);
        } catch (error) {
            console.error(error.data);
        }
    }

    useEffect(()=>{
        fetchStates();
        stateHandler('');
    }, [country]);

    return (
        <select name="states" style={{padding : "10px", margin: "10px"}} value={state} onChange={(e)=>{stateHandler(e.target.value)}} disabled={!country}>
            <option value="" disabled>Select State</option>
            {
                states.map((ele)=> (
                    <option value={ele}>{ele}</option>
                ))
            }
        </select>
    )
}

export default States;