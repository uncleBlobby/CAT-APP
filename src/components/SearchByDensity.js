import React, { useState } from 'react';

function SearchByDensity(props) {

    const [densInput, setDensInput] = useState('');
    const handleDensInput = (event) => {
        console.log(event.target.value);
        setDensInput(event.target.value);
    }

    console.log(`densInput: ${densInput}`)


    return (
        <form>
        Enter your density reading: 
            <input type="text" onChange={handleDensInput}>

            </input>
        </form>
    );

}

export default SearchByDensity;