import MainCard from "../Components/Maincard";
import Offer from "../Components/Offer";
import TeamMember from "../Components/team";
const Team = () => {
    return (
      <>
        <MainCard
          PageName="Team"
          headingLine1="Achieve Your Goals"
          headingLine2="With Consistency and Dedication"
          para="Discover the best fitness programs and tips for a healthier lifestyle. Build strength, burn calories, and stay active with our tailored plans."
          bottomLinks={[
            " ✔Programs",
            " ✔Nutrition",
            " ✔Trainers",
            " ✔Membership",
          ]} footerLink={""}   
               />

               <div className="main-heading">
                <h1 className="md:text-4xl font-bold text-center pt-9 sm:text-2xl">Our Team</h1>
                <p className="text-gray-500 text-center md:text-2xl pt-2 sm:text-2xl">Meet the dedicated team behind our fitness journey</p>
               </div>
               <TeamMember />
               <TeamMember />
               <div className="main-heading">
                <h1 className="md:text-4xl font-bold text-center pt-9 sm:text-2xl">Our Team</h1>
                <p className="text-gray-500 text-center md:text-2xl pt-2 sm:text-2xl">Meet the dedicated team behind our fitness journey</p>
               </div>
               <div className="cards grid max-lg:grid-cols-1 lg:flex lg:justify-center gap-5 pt-16">
  {["Fitness Goals", "Dedicated team", "Winning strategy"].map((title, index) => (
    <div
      key={index}
      className="bg-orange-100 rounded-lg p-4 h-72 w-72 sm:h-60 sm:w-11/12 sm:ml-9 max-sm:h-40 max-sm:w-11/12 max-sm:ml-4 max-sm:mt-4"
    >
      <h1 className="text-2xl font-bold pl-3 sm:pt-6 max-sm:text-xl">
        {title}
      </h1>
      <p className="text-gray-500 p-4 max-sm:text-sm max-sm:pt-2">
        Find aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur neque congue aliqua dolor do
      </p>
    </div>
  ))}

</div>
            <div className="offer mt-5">
            <Offer/>

            </div>


      </>




    );
  };
  
  export default Team;