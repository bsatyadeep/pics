import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID H-Spf2JNsPtTwNJ-ZebAImEwWFosm42v210jzBF_ElQ'
    },
    params: {
      query: term
    }
  });
  return response.data.results;
}

export default searchImages;