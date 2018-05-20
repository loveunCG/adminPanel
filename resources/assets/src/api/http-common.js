import axios from 'axios'

export const HTTP = axios.create({
  baseURL: './api',
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('user_token')
  }
})
