import React, { useEffect, useState } from "react";

const States = ({country}) => {
    const [states, setStates] = useState([]);

    async function fetchStates(){
        try {
            const res = await fetch(`https://crio-location-selector.onrender.com/country=${country}/states`);
            const data = await res.json();
            console.log(data);
            setStates(data);
        } catch (error) {
            console.error(error.data);
        }
    }

    useEffect(()=>{
        fetchStates();
    }, [country]);

    return (
        <select name="states">
            <option value="" disabled selected="selected">Select a State</option>
            {
                states.map((ele, index)=> (
                    <option value={ele} key={index}>{ele}</option>
                ))
            }
        </select>
    )
}

export default States;