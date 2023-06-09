import { Suspense, lazy, useContext } from "react"
import { PokeContext } from "../context/PokeContext"
const PokeCard = lazy(() => import("../components/PokeCard"))

export default function Home() {
  const { list } = useContext(PokeContext)

  return (
    <section className="w-full h-full absolute top-0 left-0">
      <div className="w-full h-full grid grid-cols-[repeat(auto-fit,minmax(90px,1fr))] gap-4 p-3 overflow-y-scroll">
          {list?.map(item => (
            <Suspense key={item.id} fallback={<div>Loading...</div>}>
              <PokeCard item={item} />
            </Suspense>
          ))}
      </div>
    </section>
  )
}
