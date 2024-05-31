const ContactUs = () => {
  return (
    <div className="mx-auto container mt-10">
      <div className="pb-[4rem] lg:pt-[8rem]">
        <div className="grid grid-cols-12 w-full gap-[3rem] items-center">
          <div className="col-span-12 lg:col-span-6 p-2 md:p-0">
            <h1 className="animate-slidein300 opacity-0 text-white">
              <span className="font-bold text-4xl md:text-6xl lg:text-8xl xl:text-9xl">Restaurant</span>{" "}
              <span className="font-semibold text-2xl md:text-4xl lg:text-6xl">and Cafe</span>
            </h1>
            <p className="animate-slidein500 opacity-0 text-[15px] text-slate-300 w-[80%] mt-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              aperiam, numquam excepturi eos molestias iste autem odio quasi
              necessitatibus amet earum labore iure exercitationem corrupti
              atque non unde sunt blanditiis!
            </p>
            <div className="animate-slidein700 opacity-0 grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 w-[80%] max-auto md:w-full text-center">
              <div className="text-white bg-black grid place-items-center p-10 rounded-lg cursor-pointer hover:bg-gradient-to-r from-cyan-500 to-blue-500 w-[50%] mx-auto lg:w-full">
                <h1 className="font-bold text-4xl">100+</h1>
                <p className="text-xl font-bold">Restaurant and Cafe</p>
              </div>
              <div className="text-white bg-black grid place-items-center p-10 rounded-lg gap-y-1 cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[50%] mx-auto lg:w-full">
                <h1 className="font-bold text-4xl">800+</h1>
                <p className="text-xl font-bold">Customer review</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 p-4 lg:p-10 bg-black rounded-lg">
            <h1 className="uppercase text-white text-2xl lg:text-4xl font-bold">Get touch us ?</h1>
            <p className="text-white text-sm lg:text-lg text-slate-400 font-semibold w-[80%] lg:w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              reiciendis tempora magnam veritatis sapiente sed, officiis cumque
              debitis consequatur sequi ullam minima fuga ipsum voluptatem omnis
              esse nostrum mollitia rem!
            </p>
            <div className="grid grid-cols-1 gap-y-6 mt-6">
              <input
                type="text"
                placeholder="Your Name"
                className="block w-[70%] md:w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="block w-[70%] md:w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="block w-[70%] md:w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              />
              <textarea
                rows={6}
                placeholder="Message"
                name=""
                id=""
                className="block w-[70%] md:w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
