import {Region} from './components/region/Region';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  let [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [searchString, setSearchString] = useState('');
  const [selectRegion, setSelectRegion] = useState('');

  useEffect(() =>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(resData => setData(resData))
      .catch(err => setIsError(true));
  },[]);
  
  console.log(data);
  let regions=[];
  let regionOptions=[<option key='-' value=''>-</option>];
  let regionList=['Klaida. Nepavyko pasiimti duomenų'];

  if (!isError){
    for(const country of data){
      if(!regions.includes(country.region)){
        regions.push(country.region);
        regionOptions.push(<option key={country.region} value={country.region}>{country.region}</option>);
      }
    }

    regions = [];
    
    data = data.filter(country => (country.name.official.toLowerCase().includes(searchString.toLocaleLowerCase())));
    
    if (selectRegion.length > 0) {
      regions= [selectRegion];
      data = data.filter(country => (country.region === selectRegion));
      console.log(regions);
    }

    for(const country of data){
      if(!regions.includes(country.region)){
        regions.push(country.region);
      }
    }

    regionList = regions.map((region, idx) => (
      <Region key={idx} title={region} countries={data.filter(country => country.region === region)}/>
    ));
  }
  
  function searchUpdate(event){
    setSearchString(event.target.value);
  }
  
  function selectUpdate(event){
    setSelectRegion(event.target.value);
  }


  
  return (
    <div className="App">
      <div className='filterContainer'>
          <label htmlFor="search-input">Seach: </label>
          <input type='text' val={searchString} onChange={searchUpdate}></input>
          <label htmlFor="select-input">Select region: </label>
          <select name="regions" id="select-input" onChange={selectUpdate}>
            {regionOptions}
          </select>
      </div>
      {regionList}
    </div>
  );
}

export default App;