import Image from "next/image";

const Section2Advocacy = () => {
  return (
    <div className="pt-8 flex flex-col justify-center items-center bg-red-700 bg-opacity-94 text-white">
      <div className="mx-60 flex">
        <div className="flex justify-center items-center">
          <Image
            src="/worried-man.png"
            alt="menu logo"
            className="dark"
            width={640}
            height={825}
            priority
          />
        </div>
        <div className="ml-16 flex flex-col justify-center items-center">
          <p className="text-2xl text-center text-white-900">
            Seu Direito, Nossa Prioridade
          </p>
          <p className="mt-4 mb-6 text-xl font-bold text-center">
            Especialistas em Direito Civil, Trabalhista e Penal Prontos para
            Atender Você
          </p>
          <p className="text-xl font-base text-center">
            Preencha o formulário abaixo para agendar uma consulta ou tirar suas
            dúvidas. Nossa equipe retornará o mais breve possível, garantindo
            que você receba a atenção e o suporte que merece.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2Advocacy;
