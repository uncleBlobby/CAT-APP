import './App.css';
import SearchByDensity from './components/SearchByDensity';
import SearchByTemperature from './components/SearchByTemperature';
import ShowResults from './components/ShowResults';
import DATA from './data/data.js'


function App() {
  let latestTemp;

  function updateTempData(data){
    //console.log(`yo mama`)
    console.log(`tempData in APP: ${data}`)
    return data;
  }

  let latestDens;

  function updateDensData(data){
    //console.log(`yo papa`)
    console.log(`densData in APP : ${data}`)
    return data;
  }

  return (
    <div className="App">
      {DATA.length} entries scanned
      <SearchByTemperature temperatureInput = {''} updateData={latestTemp = updateTempData}/>
      <SearchByDensity densityInput = {''} updateData={latestDens = updateDensData}/>
      Results:
      <ShowResults data={DATA} filterTemp={latestTemp} filterDens={latestDens} />
    </div>
  );
}

export default App;
