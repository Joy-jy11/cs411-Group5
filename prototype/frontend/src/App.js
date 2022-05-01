
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';


import React, { useCallback, useState } from 'react';
import { requestQuotes } from './getAPI';
import noImage from './no-image-available.png';

function App() {

  /* useEffect(() => {
    if(search !== ''){
      onSearchSubmit(search);
    }
  },[search, onSearchSubmit]) */


  /*     const url = `http://www.omdbapi.com/?t=${search}&apikey=${API_KEY}`; */

  const getMovie = useCallback(async search => {
    try {
      const data = await requestQuotes(search.toLowerCase());
      setMovie(data);
    } catch (error) {
      console.error(error);
    }
  });

  const [movie, setMovie] = useState({});
  const clearResults = () => setMovie([]);


  function checkResponse(data, Ratings) {
    if (data.Response === "True") {
      return (
        /* <img src={data.Poster} alt=""/>
        <h4>Title: {data.Title}</h4>
        <p>Genre: {data.Genre}</p>
        <p>Actors: {data.Actors}</p>
        <p>Plot: {data.Plot} ... </p> 
        
        I can get the imdb id by data.imdbID
        send this to backend and change the api request url
        */

        <div className="detail-container">


          <div className="info">
            <div className="field">
              <div className="label">
                <p className="title label-p">{data}</p>
              </div>


        </div>

      );
    }
    else if (data.Response === "False") {
      return (
        <p>No Movie found</p>
      );
    }
  }

  return (
    /* <div>
       <input type="text" value={search} onChange={onInputChange}/>
       <button type="submit" onClick={getMovie}>Search</button>
       <br></br>   
       {checkResponse(movie)}
    </div> */
    <div className='app'>
      <br></br>
      <h1 className='title'>Movie Search</h1>
      <br></br>
      <SearchBar getMovie={getMovie} clearResults={clearResults} />
      {checkResponse(movie)}
    </div>
  );
}

export default App;