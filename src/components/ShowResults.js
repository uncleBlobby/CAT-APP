function ShowResults(props) {

    const parseResults = (temp, dens) => {

        let finalResultArray = []

        if (temp !== '' && dens !== '') {
            let tempResults = [];

            for (let i = 0; i < props.data.length; i++) {
                if (props.data[i].includes(temp)) {
                    tempResults.push(props.data[i]);
                };
            };

            let tempAndDensResults = [];

            for (let i = 0; i < tempResults.length; i++) {
                if (tempResults[i].includes(dens)) {
                    tempAndDensResults.push(tempResults[i])
                };
            };

            if (tempAndDensResults.length < 1) {
                finalResultArray = tempResults;
            } else {
                finalResultArray = tempAndDensResults;
            };

        };

        return finalResultArray;

    };

    return (
        <div>
            <h1>ABV: {abv}%</h1>
            <h3>Volume: {volume}L/kg</h3>
            {/*props.data*/}

        </div>
    );
};

export default ShowResults