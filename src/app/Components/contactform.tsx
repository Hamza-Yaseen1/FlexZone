export default function ContactForm() {
    return (
      <div className="form p-6 max-w-2xl mx-auto">
        <form>
          <div className="form-container grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div className="input-field">
              <label htmlFor="firstName" className="block text-gray-700 mb-1">First Name:</label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter First Name"
                className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
  
            <div className="input-field">
              <label htmlFor="lastName" className="block text-gray-700 mb-1">Last Name:</label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter Last Name"
                className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
  
          <div className="bottom-form-container pt-8 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div className="input-field">
              <label htmlFor="email" className="block text-gray-700 mb-1">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
  
            <div className="input-field">
              <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number:</label>
              <input
                type="text"
                id="phone"
                placeholder="Enter Phone Number"
                className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
  
          <div className="text-center mt-20">
            <button
              type="submit"
              className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-black transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }