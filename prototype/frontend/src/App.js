
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';



//Deleted the initial display content 
//<p>
//Edit <code>src/App.js</code> and save to reload.
//</p>


/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />       
        <Search /> 
        <a
          className="App-link"
          href="http://127.0.0.1:8000/app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sumbit Movie Preference
        </a>
      </header>
    </div>
  );
}

export default App; */

import React, {useCallback, useState} from 'react';
import { requestQuotes } from './getAPI';
import noImage from './no-image-available.png';

function App() {
    
    /* useEffect(() => {
      if(search !== ''){
        onSearchSubmit(search);
      }
    },[search, onSearchSubmit]) */

    
/*     const url = `http://www.omdbapi.com/?t=${search}&apikey=${API_KEY}`; */

    const getMovie = useCallback(async search =>{
      try {
         const data = await requestQuotes(search.toLowerCase());
         setMovie(data);
      } catch (error) {
          console.error(error);
      } 
    });

    const [movie, setMovie] = useState({});
    const clearResults = () => setMovie([]);

    


  function checkResponse(data){
     if(data.Response==="True"){
       return(
        /* <img src={data.Poster} alt=""/>
        <h4>Title: {data.Title}</h4>
        <p>Genre: {data.Genre}</p>
        <p>Actors: {data.Actors}</p>
        <p>Plot: {data.Plot} ... </p> */
        <div className="detail-container">
          <div classname="poster">
            {data.Poster === "N/A" ? (
              <img src={noImage} alt={data.Title} />
              ) : (
              <img src={data.Poster} alt={data.Title} />
              )}
          </div>

          <div className="info">
            <div className="field">
              <div className="label">
                <p className="title label-p">{data.Title}</p>
              </div>
            </div>
            <div className="field">
              <div className="label">
                Actors: <p className="label-p">{data.Actors}</p>
              </div>
            </div>
            <div className="field">
              <div className="label">
                Genre: <p className="label-p">{data.Genre}</p>
              </div>
            </div>
            <div className="field">
              <div className="label">
                Description: <p className="label-p">{data.Plot}</p>
              </div>
            </div>
          </div>
         
        </div>
         
       );
    }
    else if(data.Response==="False"){
      return (
        <p>No Movie found</p>
      );
    }
    }

   return(
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
        <SearchBar getMovie={getMovie} clearResults={clearResults}/>
        {checkResponse(movie)}
      </div>
    );
}

export default App;