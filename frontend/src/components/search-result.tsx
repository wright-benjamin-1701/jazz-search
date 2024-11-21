import { Page } from '../types';

export function SearchResult ({ page }: { page: Page }) {
  return (
    <div>
      <h1>{page.title}</h1>
      <p>{page.url}</p>
    </div>
  );
};