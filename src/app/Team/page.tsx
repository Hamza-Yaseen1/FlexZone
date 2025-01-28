import MainCard from "../Components/Maincard";

const Team = () => {
    return (
      <div>
        <MainCard
          PageName="Team"
          headingLine1="Achieve Your Goals"
          headingLine2="With Consistency and Dedication"
          para="Discover the best fitness programs and tips for a healthier lifestyle. Build strength, burn calories, and stay active with our tailored plans."
          bottomLinks={[
            "Programs",
            "Nutrition",
            "Trainers",
            "Membership",
          ]} footerLink={""}        />
      </div>
    );
  };
  
  export default Team;