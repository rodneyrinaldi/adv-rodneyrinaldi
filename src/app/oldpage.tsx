import Image from "next/image";
import Section2Presentation from "./components/sections/Section2Advocacy";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-black text-white border border-white">
      <div className="h-full w-full flex flex-col justify-center items-center border border-white">
        <div className="h-1/3 w-full flex justify-center items-center border border-white">
          <div className="h-full w-7/10 flex border border-white">
            <div className="w-3/10 flex justify-center items-center border border-white">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
          />
            </div>
            <div className="w-7/10 flex flex-col justify-center items-center border border-white">
              <p className="border border-white">Parágrafo 1</p>
              <p className="border border-white">Parágrafo 2</p>
              <p className="border border-white">Parágrafo 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
