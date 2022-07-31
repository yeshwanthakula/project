
export const excercisesoptions ={
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': 'b2315805bemsh646594a5b5d1395p16914djsnad605abfb2b5',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  

  export const youtubeoptions = {
    method: 'GET',
    
  
    headers: {
      'X-RapidAPI-Key': 'b2315805bemsh646594a5b5d1395p16914djsnad605abfb2b5',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
export const fetchData = async(url ,options)=>{

const response = await fetch(url,options);

const data = await response.json();


// this is the method for fetching data without using axios

return data;

}