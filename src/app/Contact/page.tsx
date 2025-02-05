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
            "Programs",
            "Nutrition",
            "Trainers",
            "Membership",
          ]} footerLink={""}        />
          <br /><br /><br />
          <div className="cards grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center">
  {/* Card 1 */}
  <div className="card w-52 h-56 rounded-xl border border-blue-500 bg-gradient-to-br from-blue-100 to-blue-300 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
    <div className="h-full flex items-center justify-center text-blue-800 font-semibold">
      Card 1
    </div>
  </div>

  {/* Card 2 */}
  <div className="card w-52 h-56 rounded-xl border border-green-500 bg-gradient-to-br from-green-100 to-green-300 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
    <div className="h-full flex items-center justify-center text-green-800 font-semibold">
      Card 2
    </div>
  </div>

  {/* Card 3 */}
  <div className="card w-52 h-56 rounded-xl border border-red-500 bg-gradient-to-br from-red-100 to-red-300 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
    <div className="h-full flex items-center justify-center text-red-800 font-semibold">
      Card 3
    </div>
  </div>

  {/* Card 4 */}
  <div className="card w-52 h-56 rounded-xl border border-purple-500 bg-gradient-to-br from-purple-100 to-purple-300 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
    <div className="h-full flex items-center justify-center text-purple-800 font-semibold">
      Card 4
    </div>
  </div>
</div>


<div className="contact-details mt-16  w-4/5 m-auto  shadow-2xl">
 <div className="content p-12">
 <h1 className="text-4xl font-bold text-center">Let&apos;s Contact US</h1>
 <p className="text-xl font-semibold text-center p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
 </div>
 <ContactForm/>
</div>
      </div>
    );
  };
  
  export default Contact;
  