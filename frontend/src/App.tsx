import React, { useEffect, useState } from 'react';
import './App.css';
import searchJazzRequest from './services/search-jazz.';
import { Page } from './types';
import { SearchResults } from './components/search-results';
import BasicSearch from './components/basic-search';

function App() {


  const [searchResults, setSearchResults] = useState<Page[]>([]);

  useEffect(() => {

  const getResults = async function () 
  { const results = await searchJazzRequest('john coltrane');
  setSearchResults(results);
  };

  getResults();
}
  
  ,[setSearchResults]);


  return (
    <div className="App">
      <BasicSearch />
      
    </div>
  );
}

export default App;
