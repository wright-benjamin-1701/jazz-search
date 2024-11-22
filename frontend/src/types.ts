export interface Page {
  id: number;
  url: string;
  title: string;
  imageUrl: string;
  pageType: string;
  genre: string;
}

export interface Point{
  x: number;
  y: number;
}


export interface SearchResponse{
  records: Page[];
  points: Point[];
  searchTermPoint: Point;
}