import React, { useEffect, useState } from "react";

const Cities = ({country, state, city, cityHandler, stateHandler}) => {
    const [cities, setCities] = useState([]);

    async function fetchCities(){
        if(country && state){
            try {
                const res = await fetch(`https://crio-location-selector.onrender.com/country=${country}/state=${state}/cities`);
                const data = await res.json();
                setCities(data);
            } catch (error) {
                console.error(error.data);
            }
        }
    }

    useEffect(()=>{
        setCities([]);
        fetchCities();
        cityHandler('');
    }, [state]);

    return (
        <select style={{padding : "10px", margin: "10px"}} name="cities" value={city} onChange={(e)=>{cityHandler(e.target.value)}} disabled={!(country && state)}>
            <option value="" disabled>Select City</option>
            {
                cities.map((ele, index)=> (
                    <option value={ele}>{ele}</option>
                ))
            }
        </select>
    )
}

export default Cities;