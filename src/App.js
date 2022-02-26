import './App.css';
import React, { useState } from 'react';
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

  const [tempData, setTempData] = useState('');
  console.log(`tempData in App: ${tempData}`);
  let latestDens;

  function updateDensData(data){
    //console.log(`yo papa`)
    console.log(`densData in APP : ${data}`)
    return data;
  }

  const [densData, setDensData] = useState('');
  console.log(`densData in App: ${densData}`)

  return (
    <div className="App">
      <SearchByTemperature temperatureInput = {''} updateData={setTempData}/>
      <SearchByDensity densityInput = {''} updateData={setDensData}/>
      <ShowResults data={DATA} filterTemp={tempData} filterDens={densData} />
    </div>
  );
}

export default App;
