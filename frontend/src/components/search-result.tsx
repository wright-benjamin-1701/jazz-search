import { Page } from '../types';

export function SearchResult ({ page }: { page: Page }) {
  return (
    <div className='search-result'>
      <img src={page.image_url} alt='' />
      <div className='info-box'>
        <a href={page.url} target='_blank' rel='noreferrer'>{page.title} </a>
        <p>Page type: {page.page_type.toLocaleLowerCase()}</p>
        {page.genre.trim() !== ''? <p>Genre(s): {page.genre}</p> : null} 
      </div>
      
    </div>
       
  );
};