import reg from "../assets/reg-img.png";
import FormRegister from "../components/FormRegister";
export default function Inscription() {
  return (
    <>
      <div className="relative">
        <img src={reg} className="w-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full -translate-y-1/2">
          <h1 className="uppercase text-center text-white font-semibold mb-1 sm:text-6xl md:text-7xl lg:mb-6 text-xl lg:text-8xl">
            badrat khayr club
          </h1>
          <h3 className="text-center text-white sm:text-5xl md:text-6xl font-semibold text-lg lg:text-6xl">
            Welcomes You
          </h3>
        </div>
      </div>
      <FormRegister />
    </>
  );
}
