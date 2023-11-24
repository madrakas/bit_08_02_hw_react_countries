import {Region} from './components/region/Region';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() =>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(resData => setData(resData))
      .catch(err => setIsError(true));
  },[]);
  
  console.log(data.region);
  const regions=[];


  

  for(const country of data){
    if(!regions.includes(country.region)){
      regions.push(country.region);
    }
  }
  console.log(regions);

  const regionList = regions.map((region, idx) => (
    <Region title={region} countries={data.filter(country => country.region===region)}/>
  ));

  return (
    <div className="App">
      {regionList}
    </div>
  );
}

export default App;
