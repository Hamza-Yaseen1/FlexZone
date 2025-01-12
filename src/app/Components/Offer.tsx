function Offer() {
    return (
      <>
        <div className="flex flex-col lg:flex-row justify-between items-center h-auto lg:h-80 w-11/12 mx-auto bg-orange-600 rounded-lg border border-gray-300 shadow-lg p-6">
          {/* Text Section */}
          <div className="text-center p-6 lg:w-1/2 w-full rounded-lg flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-white">Special Offer</h3>
            <h1 className="text-3xl lg:text-4xl font-bold text-white pt-2 leading-10">
              Get your membership with 50% discount
            </h1>
            <p className="text-lg text-zinc-100 pt-4 leading-7">
              Join the training program and get the best fitness training in the city
            </p>
            <button className="btn px-6 py-3 bg-gray-900 text-white font-medium rounded mt-5 hover:bg-gray-800 transition">
              Join Now
            </button>
          </div>
  
          {/* Image Section */}
          <div className="h-72 lg:h-80 w-full lg:w-auto flex items-center justify-center mt-6 lg:mt-0">
            <img
              src="/images/about-5.png"
              alt="Fitness Training"
              className="h-64 lg:h-72 w-64 lg:w-72 object-cover sm:mt-10 sm:h-80 sm:w-80" 
            />
          </div>
        </div>
      </>
    );
  }
  
  export default Offer;
  