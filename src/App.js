import './App.css';
import SearchByDensity from './components/SearchByDensity';
import SearchByTemperature from './components/SearchByTemperature';
import ShowResults from './components/ShowResults';
import DATA from './data/data.js'



function App() {
  
  let tempCriterion = (childData) => {
    //search for results that contain childData within the first 5 chars...
    //then return those as relevant results.
  }

  return (
    <div className="App">
      {DATA.length} entries scanned
      <SearchByTemperature />
      <SearchByDensity />
      Results:
      <ShowResults data={DATA} />
    </div>
  );
}

export default App;
