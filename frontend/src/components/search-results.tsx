import { Page } from '../types';
import { SearchResult } from './search-result';

export function SearchResults ({ pages }: { pages: Page[] }) {
  return (
    <div className='search-results'>
      {pages.map((page)=><SearchResult page={page} />)}
    </div>
  );
};