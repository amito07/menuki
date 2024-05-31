const AboutUs = () => {
  return (
    <div className="mx-auto container">
      <div className="grid grid-cols-12 mt-10">
        <div className="text-white col-span-12 lg:col-span-6 max-w-lg space-y-4 p-2 lg:p-0">
          <div className="border-2 border-green-500 max-w-28"></div>
          <h1 className="uppercase text-4xl font-bold">About Us</h1>
          <p className="text-xl font-semibold">
            Menu Ki is a QR code-based restaurant digitalization startup in
            Bangladesh.
          </p>
          <p className="text-sm">
            Our goal is to provide a QR code-based digital menu and AI-based POS
            software in a single platform for restaurants. We believe that our
            unified software will revolutionize the restaurant industry in
            Bangladesh by offering a convenient and cashless payment system for
            customers and a profitable software solution for restaurant owners
          </p>
        </div>
        <div className="text-white col-span-12 lg:col-span-6 flex flex-col">
          <div className="flex flex-row space-x-32">
            <img
              src="/src/assets/gif/fruit salad.gif"
              alt=""
              className="w-60"
            />
            <img src="/src/assets/gif/Hamburger.gif" alt="" className="w-60" />
          </div>
          <div className="">
            <img
              src="/src/assets/gif/Eating healthy food.gif"
              alt=""
              className="w-60"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
