import { useContext, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { getPokeData } from "../services/fetchApi"
import { PokeContext } from "../context/PokeContext"

export default function Details() {
  const { pokeInfo, setPokeInfo } = useContext(PokeContext)
  const { name } = useParams()

  useEffect(() => {
    async function getInfo(){
        const data = await getPokeData(String(name))
        setPokeInfo(data)
    }
    getInfo()
  }, [])

  if(pokeInfo === undefined) return <div>Cargando</div>

  return (
    <section className="p-3 w-full flex flex-col h-full absolute top-0 left-0 text-black">
        <h2 className="text-lg font-bold text-black text-center">{pokeInfo?.name.toLocaleUpperCase()}</h2>
        <article className="w-full h-full flex">
            <div className="self-center w-[50%]">
              <img width={200} src={pokeInfo?.sprites.front_shiny} alt="" />
            </div>
            <div className="w-[50%] p-2 flex items-center">
              <ul>
                {pokeInfo?.stats.map(stat => (
                  <li key={stat.stat.name}>
                    <span className="font-bold">{stat.stat.name}: </span>
                    {stat.base_stat}
                  </li>
                ))}
              </ul>
            </div>
        </article>
        <Link to={'/poke-api'} onClick={() => setPokeInfo(undefined)} className="bg-blue-700 text-center text-white py-2 rounded-lg transition-all hover:tracking-[10px]">Volver</Link>
    </section>
  )
}
