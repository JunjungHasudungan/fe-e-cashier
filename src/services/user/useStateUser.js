import { reactive } from 'vue'

export default function useStateUser() {
    function getListUser() {
        try {
            console.log('mengambil data user')
        } catch (error) {
            console.log('error', error)
        }
    }

    function storeUser() {
        try {
            // url
        } catch (error) {
            
        }
    }
    return {
        getListUser,
        storeUser
    }
}