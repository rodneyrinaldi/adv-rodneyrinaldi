import Image from "next/image";

const Fold0Header = () => {
  return (
    <div className="pt-2 sm:pt-8 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <p className="w-[200px] sm:w-[320px] mt-2 sm:mt-2 mb-0 sm:mb-2 font-serif font-bold text-xl sm:text-3xl text-black text-opacity-80">
          <Image
            src="/images/rrblaw.png"
            alt="Rodney Rinaldi Logo"
            width={560}
            height={132}
            priority
          />
        </p>
      </div>
    </div>
  );
  <base href="" />;
};

export default Fold0Header;
