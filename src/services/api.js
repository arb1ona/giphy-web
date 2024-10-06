import axios from "axios";

const API_KEY = "1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq";
const API_BASE_URL = "https://api.giphy.com/v1/stickers/search";

export const searchGiphy = async (query) => {
  const response = await axios.get(API_BASE_URL, {
    params: {
      api_key: API_KEY,
      q: query,
      limit: 3,
      rating: "g",
    },
  });
  return response.data.data.map((item) => item.images.downsized_medium.url);
};
