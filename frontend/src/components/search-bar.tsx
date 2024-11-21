import React, { useState } from 'react';

interface SearchBarProps {
  onSearchSubmit: (query: string) => void;
}

export function SearchBar ({ onSearchSubmit }: SearchBarProps): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="search-bar">
      <form onSubmit={(e) => {
        e.preventDefault();
        onSearchSubmit(searchQuery);
      }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
