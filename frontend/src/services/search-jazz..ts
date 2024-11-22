import axios from 'axios';
import { SearchResponse } from '../types';

const processRecords = (responseData:any) : SearchResponse => {
  if (!responseData && !responseData.records) return {records:[],points:[],searchTermPoint:{'x':0,'y':0}};
  return {records: responseData.records.map((record:any) => ({
        id: record[0],
        url: record[1],
        title: record[2],
        imageUrl: record[3],
        pageType: record[4],
        genre: record[5],

  })) , points: responseData.points,searchTermPoint:responseData.searchTermPoint};
}

async function searchJazzRequest(searchString: string) {
  const apiUrl = 'http://localhost:8000/search'; 
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  try {
    const response = await axios.get(apiUrl, { params: {query: searchString,
  
    }, 
    headers:headers } );
    return processRecords(response.data);
  } catch (error) {
    console.error('Error making API request:', error);
    throw error;
  }
}


export default searchJazzRequest;
