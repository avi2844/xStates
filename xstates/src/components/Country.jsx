import React, { useEffect, useState } from "react";
import States from "./States";

const Country = ({cityHandler}) => {
    const [country, setCountry] = useState([]);
    async function fetchCountries(){
        try {
            const res = await fetch("https://crio-location-selector.onrender.com/countries");
            const data = await res.json();
            setCountry(data);
        } catch (error) {
            console.error(error.data);
        }
    }

    useEffect(()=> {
        fetchCountries();
    }, []);


    return (
        <>
        <select name="countries" style={{padding : "10px", margin: "10px"}} onChange={(e)=> {cityHandler(e.target.value)}}>
            <option value="" disabled selected="selected">Select Country</option>
            {
                country.map((ele, index)=> (
                    <option value={ele} key={index}>{ele}</option>
                ))
            }
        </select>
        </>
        
    )
}

export default Country;