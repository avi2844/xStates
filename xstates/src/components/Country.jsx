import React, { useEffect, useState } from "react";
import States from "./States";

const Country = () => {
    const [country, setCountry] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
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
        <select name="countries" onChange={(e)=> {setSelectedCountry(e.target.value)}}>
            <option value="" disabled selected="selected">Select a Country</option>
            {
                country.map((ele, index)=> (
                    <option value={ele} key={index}>{ele}</option>
                ))
            }
        </select>
        <States country={selectedCountry}/>
        </>
        
    )
}

export default Country;