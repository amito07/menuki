import TextEffects from "./TextEffects";

const Banner = () => {
  return (
    <div className="relative w-full h-[50vh] overflow-hidden">
      <img
        src="/src/assets/images/cover2.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        alt="Background"
      />
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-around">
        <div className="max-w-lg md:max-w-xl p-2"> 
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            Unveiling The Restaurants Menu with a Simple Scan
          </h1>
          <h1 className="text-white text-4xl">
            All restaurants{" "}
            <span>
              <TextEffects />
            </span>
          </h1>
        </div>
        <div className="text-white">
            <img src="/src/assets/images/img3.png" className="w-48 md:w-60" alt="" />
        </div>
      </div>
    </div>
  );
};



export default Banner;
