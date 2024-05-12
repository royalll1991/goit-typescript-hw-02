import axios from 'axios';

const Authorization:string = `F_HtHg4nYIpsjhCrcv_tKDYlijFfGHg4TIW2DaNuSOM`;

export const searchImage = async (query: string, page: number) =>{
  
  const response = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${Authorization}`, {
      params: { query: query,
      page,}
  });
  
  return response.data
  
}
