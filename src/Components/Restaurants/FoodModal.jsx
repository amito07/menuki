const FoodModal = ({ onClose }) => {
  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-800 opacity-60"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-[80%]">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <img
              src="/restaurants/4.jpg"
              alt="image"
              className="w-full rounded-lg"
            />
            <div className="mt-4">
              <h1 className="text-3xl font-bold">Beef Tehari</h1>
              <p className="text-sm font-semibold">
                Flavorful rice dish prepared with beef cubes, rice & aromatic
                spices
              </p>
              <p className="font-bold">Tk 160</p>
            </div>
            <div className="border-1 bg-green-200 rounded-lg p-4 mt-4">
              <h1 className="text-2xl font-semibold">Variation</h1>
              <div className="flex justify-between p-2">
                <div className="text-lg space-x-2">
                  <input type="radio" className="cursor-pointer" />
                  <label htmlFor="default-radio-1" className="font-bold">Half</label>
                </div>
                <div>
                    <h1 className="font-semibold">160 Tk</h1>
                </div>
              </div>
              <div className="flex justify-between p-2">
                <div className="text-lg space-x-2">
                  <input type="radio" className="cursor-pointer" />
                  <label htmlFor="default-radio-1" className="font-bold">Full</label>
                </div>
                <div>
                    <h1 className="font-semibold">250 Tk</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodModal;
