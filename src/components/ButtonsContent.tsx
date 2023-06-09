import {IoIosArrowBack} from 'react-icons/io'
import Button from "./Button";
import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";

export default function ButtonsContent() {
    const { bask, next } = useContext(PokeContext)
  return (
    <div className="w-[90%] flex justify-center gap-7">
      <Button icon={<IoIosArrowBack className="text-[25px]" />} fn={bask} />
      <Button
        icon={<IoIosArrowBack className="text-[25px] rotate-180" />}
        fn={next}
      />
    </div>
  );
}
