import React, { useCallback, useState } from 'react';
import searchJazzRequest from '../services/search-jazz.';
import { Page, Point } from '../types';
import { SearchResults } from './search-results';
import { SearchBar } from './search-bar';
import { SearchGraph } from './search-graph';


function BasicSearch() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Page[]>([]);
  const [searchPoints, setSearchPoints] = useState<Point[]>([]);
  const [searchTermPoint, setSearchTermPoint] = useState<Point>();



  const onSearchSubmit = useCallback((searchTerm:string) => {

    
    const getResults = async function () 
    { 
      const results = await searchJazzRequest(searchTerm);
      setSearchResults(results.records);
      setSearchPoints(results.points);
      setSearchTermPoint(results?.searchTermPoint);
      setSearchTerm(searchTerm);
    };
  
    getResults();
  }
    
    ,[setSearchResults,setSearchPoints,setSearchTermPoint,setSearchTerm]);


  return (
    <>      
    <div className="BasicSearch">

      <div className="BasicSearchPart">
        <h1>Jazz Search</h1>
        <SearchBar onSearchSubmit={onSearchSubmit}/>
        <SearchResults pages={searchResults} searchString={searchTerm}/>
      </div>

      <div className="BasicSearchPart">
        <h2>Visualization of the search results</h2>
        <SearchGraph points={searchPoints} searchTermPoint={searchTermPoint}  />
      </div>
     </div>
    </>

  );
}

export default BasicSearch;
