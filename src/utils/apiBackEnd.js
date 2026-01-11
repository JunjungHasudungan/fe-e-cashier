import axios from "axios";

// membuat configurasi api dari .env
const apiBackEnd = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default apiBackEnd;