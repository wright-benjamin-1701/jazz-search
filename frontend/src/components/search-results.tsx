import { useCallback, useState } from "react";
import { Page } from "../types";
import { SearchResult } from "./search-result";

export function SearchResults({ pages, searchString }: { pages: Page[], searchString:string }) {
  const resultsPerPage = 6;

  const [index, setIndex] = useState(0);
  const [searchStringCached,setSearchStringCached] = useState('');
  const slices = [];

  if(searchStringCached !== searchString){

    setIndex(0);
    setSearchStringCached(searchString);
    
  }

  for (let i = 0; i < Math.ceil((pages?.length || 0) / resultsPerPage); i++) {
    slices.push(pages?.slice(i * resultsPerPage, (i + 1) * resultsPerPage));
  }

  const onIndexChanged = useCallback(
    (index: number) => {
      setIndex(index);
    },
    [setIndex]
  );



  return (
    <div className="search-results">
      {searchStringCached !== '' ? <>
      <h2>Results for '{searchString}'</h2>
      {slices[index]?.map((page) => (
        <SearchResult page={page} />
      ))}

      <div className="pagination-buttons">
        {slices.map((_slicedPages, _index) => (
          <button
            title={(_index + 1).toString()}
            onClick={() => onIndexChanged(_index)}
            disabled={index === _index}
            key={_index}
          >{(_index + 1).toString()}</ button>
        ))}
      </div> 
      </>
      : null
      }
    </div>
  );
}
