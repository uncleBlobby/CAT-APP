import './App.css';
import SearchByDensity from './components/SearchByDensity';
import SearchByTemperature from './components/SearchByTemperature';
import ShowResults from './components/ShowResults';
import DATA from './data/data.js'

function App() {
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
