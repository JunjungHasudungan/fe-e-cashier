import axios from "axios";
import { reactive } from "vue";

// membuat configurasi api dari .env
const apiBackEnd = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
  headers: {
    'Content-Type': 'application/json'
  }
})

// global state
const state = reactive({
  user: JSON.parse(localStorage.getItem("user")),
  token: localStorage.getItem("token"),
  isAuthenticated: !!localStorage.getItem("token")
})

// membuat object auth
const auth = {

    // membuat service untuk mengambil token dari api
    async getToken() {
        // mengambil token yang disimpan di local storage halaman user
        const token = localStorage.getItem('token')

        // mengambil token dari back-end
        const response = await apiBackEnd.get('/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        //  mengembalikan response data yang dikirim dari back-end
        return response.data
    },

    // membuat serice untuk register
    async register(payload) { // payload variable objek yang akan dikirim
        try {
            // bagian try untuk mengambil data dari api
            const response = await apiBackEnd.post('auth/register', payload)

            // mengembalikan response yang dikirim dari back-end
            return response.data

        } catch (error) {
          // melempar objek error
        throw error
        }
    },

    async registerUser(payload) {
      try {

      }catch(error) {
        throw error
      }
    },

    // membuat service untuk login
    async login(payload) {
        try {
            // bagian try untuk mengambil data dari api
            const response = await apiBackEnd.post('/auth/login', payload)
            const { token, user } = response.data.data

             // simpan ke state
            state.token = token.value
            state.user = user
            state.isAuthenticated = true

            localStorage.setItem("token", state.token)
            localStorage.setItem("user", JSON.stringify(user))
            
            return user
            // // mengecek apakah ada response data token yang dikirim 
            if (response.data?.token) {

                // menyimpan token kedalam local storage halaman user
                localStorage.setItem('token', response.data.token)
            }

            return response.data
        } catch (error) {
         // bagian error untuk melempar error bila data dari api tidak ditemukan 
          throw error
        // throw error.response?.data || { message: error.response }  
        }
    }, 

    // membuat service untuk logout
    async logOut() {
        // menghapus token yang disimpan dari local storage halaman user
        // localStorage.removeItem('token')
        state.user = null
        state.token = null
        state.isAuthenticated = false
        localStorage.clear()
    },
  // state diexport
  state
}

// melakukan export auth untuk digunakan ditempat lain
export default auth