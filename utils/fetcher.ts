import axios from 'axios';

const fetcher = (url: string) => axios.get(url, {
  withCredentials: true
})
  .then((response) => response.data?.results);

export default fetcher;