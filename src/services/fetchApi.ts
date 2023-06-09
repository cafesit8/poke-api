import { toast } from 'sonner'
import { Root } from '../interface'

export async function getPokeData(name: (string | number)): Promise<Root>{
  const fetchData = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  if(fetchData.status === 404){
    toast.error('Pokemon no encontrado')
    throw new Error('Pokemon not found')
  }
  const data = await fetchData.json()
  return data
}
