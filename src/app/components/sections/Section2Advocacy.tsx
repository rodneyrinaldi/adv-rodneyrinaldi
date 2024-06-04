import Image from "next/image";

const Section2Advocacy = () => {
  return (
    <div className="min-h-28 w-full py-8 flex flex-col justify-center items-center border">
      <div className="h-full w-full flex justify-center items-center border">
        <p className="border">Advocacia</p>
      </div>

      <div className="w-full py-6 flex justify-center items-center border">
        <div className="h-full w-7/10 flex border">
          <div className="w-3/10 flex justify-center items-center border">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </div>
          <div className="h-full w-7/10 flex flex-col justify-center items-center border">
            <p className="border">Seu Direito, Nossa Prioridade</p>
            <p className="border">
              Especialistas em Direito Civil, Trabalhista e Penal Prontos para
              Atender Você
            </p>
            <p className="border">
              Preencha o formulário abaixo para agendar uma consulta ou tirar
              suas dúvidas. Nossa equipe retornará o mais breve possível,
              garantindo que você receba a atenção e o suporte que merece
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2Advocacy;
