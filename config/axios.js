// import axios
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // contoh: http://localhost:8000/api
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});