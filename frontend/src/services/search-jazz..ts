import axios from 'axios';
import { Page } from '../types';

const processRecords = (responseData:any) : Page[] => {
  if (!responseData && !responseData.records) return [];
  return responseData.records.map((record:any) => ({
        id: record[0],
        url: record[1],
        title: record[2],
        image_url: record[3],

  }));
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
