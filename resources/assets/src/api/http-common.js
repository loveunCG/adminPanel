import axios from 'axios'

export const HTTP = axios.create({
  baseURL: 'http://localhost/pannel/public/api',
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('user_token')
  }
})
