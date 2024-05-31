const Deals = () => {
  return (
    <div className="container mx-auto mb-10">
      <div className="grid grid-cols-12">
        <div className="col-span-12">
        <h1 className="text-white font-bold text-4xl">Available Deals</h1>
        </div>
        <div className="col-span-12 lg:col-span-4 mt-4">
        <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white text-center rounded-lg shadow-md relative">
                <h3 className="text-lg font-semibold mb-2">
                  Tk 100 off (SEBL 100)
                  <br />
                  <span className="text-sm">Min. order Tk 399. Valid for all items.</span>
                  <br />
                  <span className="text-sm">Use in cart</span>
                </h3>
                <div className="w-12 h-12 bg-[#1b1b1b] rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 -ml-6"></div>
                <div className="w-12 h-12 bg-[#1b1b1b] rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 -mr-6"></div>
              </div>
        </div>

      </div>
    </div>
  );
};

export default Deals;
