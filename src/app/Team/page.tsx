import MainCard from "../Components/Maincard";
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
      </>




    );
  };
  
  export default Team;