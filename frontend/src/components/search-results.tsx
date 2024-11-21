import { Page } from '../types';
import { SearchResult } from './search-result';

export function SearchResults ({ pages }: { pages: Page[] }) {
  return (
    <div>
      {pages.map((page)=><SearchResult page={page} />)}
    </div>
  );
};