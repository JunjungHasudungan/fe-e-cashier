import { reactive } from 'vue'

export const loginErrors = reactive({
  email: '',
  password: ''
})
// membuat class validator
export default class LoginValidator {

    // pembuatan fungsi validasi email
    static validateEmail(email) {
        // jika inputan email kosong
        if(!email) {
            loginErrors.email = 'Email tidak boleh kosong'
            return false
        }

        // pengecekan regex / pola email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!regex.test(email)) {
            loginErrors.email = 'Format email tidak valid'
            return false
        }

        // mengosongkan pesan error karna tidak ada error
        loginErrors.email = ''

        // melanjutkan eksekusi selanjutnya bila tidak ada error
        return true
    }

    // pembuatan fungsi reset seluruh error 
    static resetErrors() {
        loginErrors.email = ''
        loginErrors.password = ''
    }

    // fungsi validasi inputan password
    static validatePassword(password) {
        // pengecekan bila tidak ada inputan password
        if(!password) {
            loginErrors.password = 'Password tidak boleh kosong'
            return false
        }

        // bila pasword yang dimasukkan tidak boleh 6 karakter
        if(password.length < 6) {
            loginErrors.password = 'Password minimal 6 karakter'
            return false
        }

        // melakukan reset error password
        loginErrors.password = ''

        // melanjutkan ke eksekusi selanjutnya
        return true
    }

    // fungsi validasi seluruhnya
    static validateAll(user) {
        const emailValidated = this.validateEmail(user.email)
        const passwordValidated = this.validatePassword(user.password)

        return emailValidated && passwordValidated
    }
}