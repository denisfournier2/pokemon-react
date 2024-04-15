export interface IPokemonProps {
  name: string
  url: string
  id: number
  sprites: {
    front_default: string
  }
  types: [
    {
      type: {
        name: string
      }
    }
  ]
  weight: number
  height: number
}
