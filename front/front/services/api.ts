import axios from "axios";

const API_URL = "http://localhost:3001/cv";

export async function fetchCV() {
  const response = await axios.get(API_URL);
  return response.data;
}
