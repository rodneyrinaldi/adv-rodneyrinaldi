import Image from "next/image";

const Section4Testimonials = () => {
  return (
    <div className="min-h-28 w-full py-8 flex flex-col justify-center items-center border border-white">
      <div className="h-full w-full flex justify-center items-center border border-white">
        <p className="border border-white">Testemunhos</p>
      </div>

      <div className="w-full py-6 flex justify-center items-center border border-white">
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
          <div className="h-full w-7/10 flex flex-col justify-center items-center border border-white">
            <p className="border border-white">O que Nossos Clientes Dizem</p>
            <p className="border border-white">
              Experiências Reais de Quem Já Foi Atendido por Nossa Equipe
            </p>
            <p className="border border-white">
              “A equipe foi extremamente competente e atenciosa. Resolvi meu
              caso de forma rápida e eficiente.” - João Silva
            </p>
            <p>
              “Recomendo os serviços de advocacia para qualquer pessoa que
              precise de um suporte jurídico de qualidade.” - Maria Fernandes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4Testimonials;
