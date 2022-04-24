import React, { useEffect, useState } from 'react';

import './SearchBar.css'

/* <div>
         <input type="text" value={search} onChange={onInputChange}/>
         <button type="submit" onClick={getMovie}>Search</button>
         <br></br>   
         {checkResponse(movie)}
      </div> */

    const SearchBar = ({getMovie, clearResults}) => {

        const [search, setSearch] = useState('');
        const [debouncedTerm, setDebouncedTerm] = useState(search);

         // update 'term' value after 1 second from the last update of 'debouncedTerm'
        useEffect(() => {
            const timer = setTimeout(() => setSearch(debouncedTerm), 1000);
            return () => clearTimeout(timer);
        }, [debouncedTerm])

        const onInputChange = e =>{
            setDebouncedTerm(e.target.value);
          }
        
    
        useEffect(()=> {
          if(search !== ''){
            getMovie(search);
          }
          else{
              clearResults();
          }
        }, [search]);

        return (
            <div className='searchbar'>
            <input 
            className='searchbar-input'
            type='text'
            placeholder="Search movies by movie title . . . "
            onChange={onInputChange}
            value={debouncedTerm}/>
          </div>
        );
    };
    

export default SearchBar;