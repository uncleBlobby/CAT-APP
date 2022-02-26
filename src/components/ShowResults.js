import OutputList from "./OutputList";

function ShowResults(props) {

    const parseResults = (temp, dens) => {
        let finalResultArray = []
        if (temp !== '' && dens !== '') {
            let tempResults = [];
            for (let i = 0; i < props.data.length; i++) {
                if (props.data[i].includes(temp)) {
                    tempResults.push(props.data[i]);
                }
            }
            let tempAndDensResults = [];
            for (let i = 0; i < tempResults.length; i++) {
                if (tempResults[i].includes(dens)) {
                    tempAndDensResults.push(tempResults[i])
                }
            }
            if (tempAndDensResults.length < 1) {
                finalResultArray = tempResults;
            } else {
                finalResultArray = tempAndDensResults;
            }
        }
        return finalResultArray;
    }

    let outputResultsArray = parseResults(props.filterTemp, props.filterDens)

    const listItems = outputResultsArray.map((outputResultsArray) => 
        <li>{outputResultsArray}</li>
    );

    return (
        <div>
            <h1>{outputResultsArray.length} results.</h1>
            <h3>Temperature read: {props.filterTemp}</h3>
            <h3>Density read: {props.filterDens}</h3>
            {/*props.data*/}
            <ul>{listItems}</ul>
        </div>
    )
};

export default ShowResults