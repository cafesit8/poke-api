import { useState, useEffect} from 'react'
import { Root } from '../interface'
import { getPokeData } from '../services/fetchApi'

export default function useGetDataApi() {
    const [list, setList] = useState<Root[]>([])
    const [firstNumber, setFirstNumber] = useState(1)
    const [secondNumber, setSecondNumber] = useState(6)
    
    const bask = () => {
      if (firstNumber > 1) {
        setFirstNumber(prev => prev - 6)
        setSecondNumber(prev => prev - 6)
      }
    }
    const next = () => {
      setFirstNumber(prev => prev + 6)
      setSecondNumber(prev => prev + 6)
    }
  
    useEffect(() => {
      async function fetchData() {
        setList([])
        for (let i = firstNumber; i <= secondNumber; i++) {
          const data = await getPokeData(i)
          setList(prev => [...prev, data])
        }
      }
      fetchData()
    }, [firstNumber, secondNumber])

    return {list, next, bask}
}
