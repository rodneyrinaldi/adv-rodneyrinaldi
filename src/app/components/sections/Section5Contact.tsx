import Image from "next/image";

const Section5Contact = () => {
  return (
    <div className="min-h-28 w-full py-8 flex flex-col justify-center items-center border border-white">
      <div className="w-full py-6 flex justify-center items-center border border-white">
        <div className="h-full w-7/10 flex flex-col justify-center items-center border border-white">
          <p className="border border-white">Fale Conosco</p>
          <p className="border border-white">Estamos Aqui para Ajudar Você</p>
          <p className="border border-white">
            Preencha o formulário abaixo para agendar uma consulta ou tirar suas
            dúvidas. Nossa equipe retornará o mais breve possível, garantindo
            que você receba a atenção e o suporte que merece.
          </p>
        </div>
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
        </div>
      </div>
    </div>
  );
};

export default Section5Contact;
