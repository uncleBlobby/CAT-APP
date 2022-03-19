import React from 'react';

function SearchByDensity(props) {

    const handleDensInput = (event) => {
        //console.log(event.target.value);
        //setDensInput(event.target.value);
        props.updateData(event.target.value);
    };

    return (
        <form className='InputTitle'>
            Density (g/L): 
            <input
                type="text"
                className='InputBox'
                onChange={handleDensInput}>
            </input>
        </form>
    );

};

export default SearchByDensity;