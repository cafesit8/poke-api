import { useNavigate } from "react-router-dom";
import { Root } from "../interface";

interface Props {
  item: Root;
}

export default function PokeCard({ item }: Props) {
  const navigation = useNavigate()
  function deatils(){
      navigation(`/poke-api/details/${item.name}`)
  }
  return (
    <article onClick={deatils} className="bg-gray-700 cursor-pointer p-2 rounded-lg">
      <img className="m-auto hover:scale-125 transition-all" width={200} src={item.sprites.front_default} />
      <h2 className="text-center font-bold">{item.name}</h2>
    </article>
  );
}
