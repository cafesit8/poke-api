import { useContext } from "react";
import { getPokeData } from "../services/fetchApi";
import { PokeContext } from "../context/PokeContext";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from 'sonner'

export default function Form() {
  const { setPokeInfo } = useContext(PokeContext)
  const navigate = useNavigate()
  async function handleSubmit(e: any){
    e.preventDefault();
    if(e.target.name.value !== ''){
      const data = await getPokeData(e.target.name.value)
      setPokeInfo(data)
      toast.success('Pokemon Encontrado')
      navigate(`/poke-api/details/${e.target.name.value}`)
    }else{
      toast.error('No hay algo que buscar')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-[90%] flex gap-3 justify-between" action="">
      <input
        className="bg-yellow-400 py-2 px-5 w-[85%] rounded-md text-black placeholder:text-black"
        type="text"
        name="name"
        placeholder="Buscar Pokemon"
      />
      <button className="bg-red-900 rounded-full p-3">🔍</button>
      <Toaster richColors theme="light" position="top-right" />
    </form>
  );
}
