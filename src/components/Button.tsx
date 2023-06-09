import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";

interface PropsButton {
    icon: React.ReactNode;
    fn: () => void
}

export default function Button({icon, fn}: PropsButton) {
  const { pokeInfo } = useContext(PokeContext)
  return (
    <button className="bg-blue-800 p-3 flex items-center justify-center rounded-full hover:scale-125 transition-all" disabled={pokeInfo !== undefined} onClick={fn}>
        {icon}
    </button>
  )
}
