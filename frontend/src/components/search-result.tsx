import { Page } from '../types';

export function SearchResult ({ page }: { page: Page }) {
  return (
    <div className='search-result'>
      <img src={page.image_url} alt='' height={50} width={50}/>
      <a href={page.url} target='_blank' rel='noreferrer'>{page.title} </a>
    </div>
       
  );
};