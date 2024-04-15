import axios from 'axios'
import { ILocalPokemonProps } from '../components/molecules/favorited/types';

export const Api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
})

export const Localhost = axios.create({
  baseURL: 'http://localhost:8000/api'
})

export const create = async (body: ILocalPokemonProps): Promise<void> => {
  const { data: response } = await Localhost.post(`pokemon`, body)
  return response
}

export async function listPokemons(): Promise<ILocalPokemonProps[]> {
  const { data: response } = await Localhost.get(`pokemon`)
  return response
}

export const onDelete = async (id: number): Promise<void> => {
  const { data: response } = await Localhost.delete(`pokemon/${id}`)
  return response
}
