import Image from "next/image";

const WAButton: React.FC = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5511912227040"
      className="bg-green-500 hover:bg-green-600 text-white text-xl font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
    >
      <span className="text-sm sm:text-xl font-normal py-2">Fale com o advogado no</span>
      <Image
        src="/images/whatsapp.png"
        alt="Rodney Rinaldi Logo"
        className="w-6 h-6 inline-block ml-2 animate-pulse-slow"
        width={300}
        height={72}
        priority
      />
    </a>
  );
};

export default WAButton;
