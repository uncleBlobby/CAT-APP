import React, { useState } from 'react';

function SearchByTemperature(props) {

    //const [temperatureInput, setTempInput] = useState('');
    const handleTempInput = (event) => {
        //console.log(event.target.value)
        //setTempInput(event.target.value)
        props.updateData(event.target.value)
    }

    //console.log(temperatureInput)

    return (
        <form>
        Enter your temperature reading: 
            <input type="text" onChange={handleTempInput}>

            </input>
        </form>
    );

}

export default SearchByTemperature;