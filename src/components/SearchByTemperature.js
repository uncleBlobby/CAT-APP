import React, { useState } from 'react';

function SearchByTemperature(props) {

    const [tempInput, setTempInput] = useState('');
    const handleTempInput = (event) => {
        console.log(event.target.value)
        setTempInput(event.target.value)
        
    }

    console.log(`tempInput: ${tempInput}`);

    return (
        <form>
        Enter your temperature reading: 
            <input type="text" onChange={handleTempInput}>

            </input>
        </form>
    );

}

export default SearchByTemperature;