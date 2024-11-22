import React, { useCallback, useEffect, useState } from 'react';
import searchJazzRequest from '../services/search-jazz.';
import { Page, Point } from '../types';
import { SearchResults } from './search-results';
import { SearchBar } from './search-bar';
import { SearchGraph } from './search-graph';


function BasicSearch() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Page[]>([]);
  const [searchPoints, setSearchPoints] = useState<Point[]>([]);
  const [searchPoint, setSearchPoint] = useState<Point>();



  const onSearchSubmit = useCallback((searchTerm:string) => {

    
    const getResults = async function () 
    { const results = await searchJazzRequest(searchTerm);
    setSearchResults(results.records);
    setSearchPoints(results.points);
    setSearchPoint(results?.searchPoint);
    setSearchTerm(searchTerm);
    };
  
    getResults();
  }
    
    ,[setSearchResults,setSearchPoints,setSearchTerm]);


  return (
    <>
      <div className="BasicSearch">
        <h1>Jazz Search</h1>
        <SearchBar onSearchSubmit={onSearchSubmit}/>
        <SearchResults pages={searchResults} searchString={searchTerm}/>
      </div>
      <div className="BasicSearch">
        <h2>Visualization of the search results</h2>
        <SearchGraph points={searchPoints} searchPoint={searchPoint}  />
      </div>
    </>

  );
}

export default BasicSearch;
