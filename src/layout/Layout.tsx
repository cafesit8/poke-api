import ButtonsContent from "../components/ButtonsContent";
import Form from "../components/Form";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <section className="w-[500px] h-[600px] bg-[#dd082f] rounded-md flex flex-col gap-5 items-center justify-center max-[540px]:w-[90%]">
        <article className="w-[90%] h-[60%] bg-gray-500 rounded-lg flex justify-center items-center">
          <div className="bg-white w-[93%] h-[90%] rounded-lg border-black border-[2px] overflow-hidden relative">
            <Outlet />
          </div>
        </article>
        <ButtonsContent />
        <Form />
      </section>
    </main>
  );
}
