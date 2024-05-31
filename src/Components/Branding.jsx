const Branding = () => {
  return (
    <div className="container mx-auto">
    <div className="flex flex-col mt-10">
        <div className="flex flex-col items-center justify-center space-y-3">
            <h1 className="text-4xl text-white font-bold uppercase">Brands</h1>
            <div className="border-2 border-green-500 w-1/4"></div>
        </div>
        <div className="relative flex flex-row overflow-x-hidden">
      <div className="py-12 animate-marquee whitespace-nowrap flex flex-row">
        <img
          src="/brands/1.jpeg"
          alt="brand1"
          className="mx-4 w-36 h-auto"
        />
        <img
          src="/brands/1.jpeg"
          alt="brand1"
          className="mx-4 w-36 h-auto"
        />
        <img
          src="/brands/2.jpeg"
          alt="brand1"
          className="mx-4 w-36 h-auto"
        />
        <img
          src="/brands/3.jpg"
          alt="brand1"
          className="mx-4 w-36 h-auto"
        />
        <img
          src="/brands/4.jpeg"
          alt="brand1"
          className="mx-4 w-36 h-auto"
        />
        <img
          src="/brands/5.png"
          alt="brand1"
          className="mx-4 w-36 h-auto"
        />
        <img
          src="/brands/7.jpeg"
          alt="brand1"
          className="mx-4 w-36 h-auto"
        />
        <img
          src="/brands/8.png"
          alt="brand1"
          className="mx-4 w-36 h-auto"
        />
      </div>

      <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex flex-row">
      <img
          src="/brands/1.jpeg"
          alt="brand1"
          className="mx-4 w-36 h-auto"
        />
        <img
          src="/brands/1.jpeg"
          alt="brand1"
          className="mx-4 w-36 h-auto"
        />
        <img
          src="/brands/2.jpeg"
          alt="brand1"
          className="mx-4 w-36 h-auto"
        />
        <img
          src="/brands/3.jpg"
          alt="brand1"
          className="mx-4 w-36 h-auto"
        />
        <img
          src="/brands/4.jpeg"
          alt="brand1"
          className="mx-4 w-36 h-auto"
        />
        <img
          src="/brands/5.png"
          alt="brand1"
          className="mx-4 w-36 h-auto"
        />
        <img
          src="/brands/7.jpeg"
          alt="brand1"
          className="mx-4 w-36 h-auto"
        />
        <img
          src="/brands/8.png"
          alt="brand1"
          className="mx-4 w-36 h-auto"
        />
      </div>
    </div>
    </div>
    </div>
  );
};

export default Branding;
