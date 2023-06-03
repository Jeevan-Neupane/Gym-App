export const excercisOptions = {
    method: 'GET',

    headers: {
      'X-RapidAPI-Key': 'eaff3fbff9mshd236ca96a5ba530p1aac6cjsn4471c818233a',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
export const youtubeOptions={
    method: 'GET',
   
    headers: {
      'X-RapidAPI-Key': 'eaff3fbff9mshd236ca96a5ba530p1aac6cjsn4471c818233a',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}