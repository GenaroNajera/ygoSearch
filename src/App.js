import React, {useState, useEffect} from 'react';
import './App.css';
import Result from './Result.js';

function App() {
  const [search, setSearch] = useState('blue-eyes white dragon');
  const [info, setInfo] = useState({});
  const [image, setImage] = useState('');
  const [err, setErr] = useState(true);

  useEffect(() => {
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${search}`)
      .then(res => res.json())
      .then(data => {
        if(data.data) {
          setImage(data.data[0].card_images[0].image_url);
          setInfo(data.data[0]);
          setErr(false);
        } else {
          setErr(true);
        }
      });
  },[]);
  
  function handleFormSubmit(e) {
    e.preventDefault();
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${search}`)
      .then(res => res.json())
      .then(data => {
        if(data.data) {
          setImage(data.data[0].card_images[0].image_url);
          setInfo(data.data[0]);
          setErr(false);
        } else {
          setErr(true);
        }
      });
  }

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <input type='text' placeholder='Enter Card Name' value={search} onChange={(e) => setSearch(e.target.value)} required/>
        <input type='submit' value='Search' />
      </form>

      <Result image={image} info={info} err={err}/>
    </div>
  );
}

export default App;
