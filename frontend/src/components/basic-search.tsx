import React, { useCallback, useEffect, useState } from 'react';
import searchJazzRequest from '../services/search-jazz.';
import { Page } from '../types';
import { SearchResults } from './search-results';
import { SearchBar } from './search-bar';


function BasicSearch() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Page[]>([]);

  useEffect(() => {

  const getResults = async function () 
  { const results = await searchJazzRequest(searchTerm);
  setSearchResults(results);
  };

  getResults();
}
  
  ,[searchTerm,setSearchResults]);


  const onSearchSubmit = useCallback((searchTerm:string) => {setSearchTerm(searchTerm)},[setSearchTerm])


  return (
    <div className="BasicSearch">
      <h1>Jazz Search</h1>
      <SearchBar onSearchSubmit={onSearchSubmit}/>
      <SearchResults pages={searchResults} searchString={searchTerm}/>
      
    </div>
  );
}

export default BasicSearch;
