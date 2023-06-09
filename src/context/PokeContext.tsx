import { createContext, useState, useEffect } from "react"
import { getPokeData } from "../services/fetchApi"
import { Root } from "../interface"

interface PropsContext {
    children: React.ReactNode
}

interface PropsProvider {
  list: Root[];
  bask: () => void;
  next: () => void;
  setPokeInfo: React.Dispatch<React.SetStateAction<Root | undefined>>;
  pokeInfo: Root | undefined;
}

export const PokeContext = createContext({} as PropsProvider);

export function PokeContextProvider({children}: PropsContext) {
    const [pokeInfo, setPokeInfo] = useState<Root>()
    const [list, setList] = useState<Root[]>([])
    const [firstNumber, setFirstNumber] = useState(1)
    const [secondNumber, setSecondNumber] = useState(6)
    
    function bask() {
      if (firstNumber > 1) {
        setFirstNumber(prev => prev - 6)
        setSecondNumber(prev => prev - 6)
      }
    }

    function next(){
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

  return (
    <PokeContext.Provider value={{
      list,
      bask,
      next,
      setPokeInfo,
      pokeInfo
    }}>
        {children}
    </PokeContext.Provider>
  )
}
