import React, {useState, useEffect} from 'react';
import './App.css';
import Result from './Result.js';

function App() {
  const [search, setSearch] = useState('blue-eyes white dragon');
  const [info, setInfo] = useState({});
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);

  useEffect(() => {
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${search}`)
    .then(response => response.json())
    .then(data => {
      setLoading(false);
      setImage(data.data[0].card_images[0].image_url);
      setInfo(data.data[0]);
    });
  },[]);
  
  function handleFormSubmit(e) {
    e.preventDefault();
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${search}`)
      .then(res => res.json())
      .then(data => {
        if(data.data) {
          setErr(false);
          setImage(data.data[0].card_images[0].image_url);
          setInfo(data.data[0]);
        } else {
          setErr(true);
        }
      });
  }

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <input type='text' value={search} onChange={(e) => setSearch(e.target.value)}/>
        <input type='submit' value='Search' />
      </form>
      {loading ? <h1>loading...</h1> : <Result image={image} search={search} info={info} err={err}/>}
    </div>
  );
}

export default App;
