import ContactForm from "../Components/contactform";
import MainCard from "../Components/Maincard";

const Contact = () => {
    return (
      <div>
        <MainCard
          PageName="Contact Us"
          headingLine1="Achieve Your Goals"
          headingLine2="With Consistency and Dedication"
          para="Discover the best fitness programs and tips for a healthier lifestyle. Build strength, burn calories, and stay active with our tailored plans."
          bottomLinks={[
            "✔Programs",
            "✔Nutrition",
            "✔Trainers",
            "✔Membership",
          ]} footerLink={""}        />
          <br /><br /><br />
          <div className="cards grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center">
  {/* Card 1 */}
  <div className="card w-52 h-56 rounded-xl border shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
    <div className="h-full">
      <h1 className="p-9 text-xl font-bold pb-0">Address</h1>
      <h2 className="p-4 pt-3 pl-5 text-md font-semibold">514 Magnolia St. Orlando, FL 32806</h2>
      <button className="px-3 py-2 rounded border border-orange-600 bg-white hover:bg-orange-600 ml-5 font-semibold text-orange-600 hover:text-white transition duration-300 ease-in-out">Get direction</button>
    </div>
  </div>

  {/* Card 2 */}
  <div className="card w-52 h-56 rounded-xl  shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
    <div className="h-full">
      <h1 className="text-xl font-bold p-9 pb-0 pl-14">Phone</h1>
      <h2 className="font-semibold pl-5 pt-4 text-sm text-gray-600">Main office</h2>
      <span title="+1 234-567-890" className=" pl-5">+1 234-444-123</span>
      <h2 className="font-semibold pl-5 pt-4 text-sm text-gray-600">Main office</h2>
      <span title="+1 234-567-890" className="pl-5">+1 234-555-124</span>
    </div>
  </div>

  {/* Card 3 */}
  <div className="card w-52 h-56 rounded-xl border  shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
  <div className="h-full">
      <h1 className="text-xl font-bold p-9 pb-0 pl-14">Schedule</h1>
      <h2 className="font-semibold pl-5 pt-4 text-sm text-gray-600">Mon - Thu</h2>
      <span title="+1 234-567-890" className=" pl-5  font-bold">10:00 - 22:00</span>
      <h2 className="font-semibold pl-5 pt-4 text-sm text-gray-600">Fri - Sat
      </h2>
      <span title="+1 234-567-890" className="pl-5  font-bold">10:00 - 18:00</span>
    </div>
  </div>

  {/* Card 4 */}
  <div className="card w-52 h-56 rounded-xl border  shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
  <div className="h-full">
      <h1 className="text-xl font-bold p-9 pb-0 pl-14">Email</h1>
      <h2 className="font-semibold pl-5 pt-4 text-sm text-gray-600">Main office</h2>
      <span title="+1 234-567-890" className=" pl-5 font-semibold">office@example.com</span>
      <h2 className="font-semibold pl-5 pt-4 text-sm text-gray-600">Reception room      </h2>
      <span title="+1 234-567-890" className="pl-5 font-semibold">reception@example.com</span>
    </div>
  </div>
</div>


<div className="contact-details mt-16  w-4/5 m-auto  shadow-2xl">
 <div className="content p-12">
 <h1 className="text-4xl font-bold text-center">Let&apos;s Contact US</h1>
 <p className="text-xl md:font-semibold sm:font-medium  text-center sm:p-0  md:p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
 </p>
 </div>
 <ContactForm/>
</div>
      </div>
    );
  };
  
  export default Contact;
  