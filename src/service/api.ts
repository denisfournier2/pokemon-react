import axios from 'axios'

export const Api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
})

export const Localhost = axios.create({
  baseURL: 'http://localhost:8000/api'
})