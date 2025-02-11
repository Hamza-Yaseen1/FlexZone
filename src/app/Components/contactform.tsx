export default function ContactForm() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <form className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-gray-700 mb-1">First Name:</label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter First Name"
              className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-gray-700 mb-1">Last Name:</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter Last Name"
              className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Contact Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number:</label>
            <input
              type="text"
              id="phone"
              placeholder="Enter Phone Number"
              className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center pt-6">
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
