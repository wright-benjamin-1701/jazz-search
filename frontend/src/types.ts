export interface Page {
  id: number;
  url: string;
  title: string;
  image_url: string;
  page_type: string;
  genre: string;
}

export interface Point{
  x: number;
  y: number;
}


export interface SearchResponse{
  records: Page[];
  points: Point[];
  searchPoint?: Point;
}