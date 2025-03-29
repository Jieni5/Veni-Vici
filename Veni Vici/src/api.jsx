
import axios from 'axios';
const API_URL = "https://api.thecatapi.com/v1/";
const API_KEY = "live_qnLNvnoCRPpu05b66eXqYGpJ2vBnc1fxXJhIGATZKLoIOuoTy4O7GdPVKpLB2cwR";

// Utility function to get a random item
export const fetchRandomItem = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
};
