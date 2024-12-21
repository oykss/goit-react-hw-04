import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

export default async function getPhotos(query, page = 1, per_page = 12) {
  const searchParams = new URLSearchParams({
    client_id: import.meta.env.VITE_API_KEY,
    query: query,
    per_page: per_page,
    page: page,
    orientation: 'landscape',
  });

  const response = await axios.get(`/search/photos?${searchParams}`);

  return response.data;
}
