import { Page } from '../types';

export function SearchResult ({ page }: { page: Page }) {
  return (
    <div className='search-result'>
      <a href={page.url} target='_blank' rel='noreferrer'>{page.title} </a>
    </div>
  );
};