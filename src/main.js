import './assets/main.css'
import 'flowbite';

import { createApp } from 'vue'

// App.vue seabagai
import App from './App.vue'

// import route sebagai tempat perpidahan halaman / component
import router from './routes'

// pembuatan objek app sebagai objek vue yang memanipulasi dari halaman utama yaitu index.html
const app = createApp(App)

// mengunakan router keddalam halaman
app.use(router)

// meletakkan id app sebagai peletakan objek app sebagai manipusi DOM
app.mount('#app')
