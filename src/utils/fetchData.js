
export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd5c3905fa3msh83df27b521ed586p1588cajsn901cb5486be7',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  } ;
  export const youtubeoptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd5c3905fa3msh83df27b521ed586p1588cajsn901cb5486be7',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
export const  fetchData = async(url, options)=>{
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}