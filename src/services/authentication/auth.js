import axios from "axios";

// membuat configurasi api dari .env
const apiBackEnd = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
  headers: {
    'Content-Type': 'application/json'
  }
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

    // membuat service untuk login
    async login() {
        try {
            // bagian try untuk mengambil data dari api
             const response = await apiBackEnd.post('/auth/login', payload)

            // mengecek apakah ada response data token yang dikirim 
            if (response.data.token) {

                // menyimpan token kedalam local storage halaman user
                localStorage.setItem('token', response.data.token)
            }

            return response.data
        } catch (error) {
         // bagian error untuk melempar error bila data dari api tidak ditemukan 
        throw error.response?.data || { message: error.response }  
        }
    }, 

    // membuat service untuk logout
    async logOut() {
        // menghapus token yang disimpan dari local storage halaman user
        localStorage.removeItem('token')
    }
}

// melakukan export auth untuk digunakan ditempat lain
export default auth