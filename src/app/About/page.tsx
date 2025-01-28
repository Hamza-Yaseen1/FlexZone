import MainCard from "../Components/Maincard";
import Image from "next/image";
import Team from "../Components/team";
import Offer from "../Components/Offer";

const About = () => {
  return (
    <>
      <MainCard
        PageName="About Us"
        headingLine1="Achieve Your Goals"
        headingLine2="With Consistency and Dedication"
        para="Discover the best fitness programs and tips for a healthier lifestyle. Build strength, burn calories, and stay active with our tailored plans."
        bottomLinks={["✔ Programs", "✔ Nutrition", "✔ Trainers", "✔ Membership"]} footerLink={""}      />
      {/* Image Section */}
      <div className="relative w-11/12 h-new m-auto mt-1 overflow-hidden rounded-lg shadow-lg">
        <Image
          src="/images/about-6.jpg"
          alt="About Us Image"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
      <br />
      <br /> <br />
      <div className="text-content lg:flex md:flex md:gap-8 sm:block">
        <div className="left  md:h-new md:w-2/5  ">
         <h2 className="text-gray-600 font-bold md:text-xl sm:text-xl pl-4">What we do</h2>
         <h1 className="md:text-4xl sm:text-2xl p-4 font-bold leading-snug">The transformative power of fitness inspired our founder to take control of his own life</h1>
        </div>
        <div className="right  md:h-new md:w-3/5 text-gray-700 md:font-bold sm:font-semibold md:text-lg sm:text-sm">
        <h1 >Morbi et massa fames ac scelerisque sit commodo dignissim faucibus quisque proin lectus laoreet sem adipiscing sollicitudin erat massa tellus lorem enim aenean phasellus in hendrerit interdum lorem proin pretium dictum urna suspendisse quis risus et.</h1>
          <h1 className="pt-4">Sit congue tellus urna phasellus sagittis interdum sed laoreet eget curabitur. Vel magna sit aliquet viverra morbi massa mattis urna, feugiat egestas tincidunt ipsum diam quam massa amet odio nisi duis dolor.</h1>
          <h1 className="pt-4 ">Morbi et massa fames ac scelerisque sit commodo dignissim faucibus quisque proin lectus laoreet sem adipiscing sollicitudin erat massa tellus lorem enim aenean phasellus in hendrerit interdum lorem proin pretium dictum urna suspendisse quis risus et.</h1>
        </div>

      </div>
      <Team/>
      <Offer/>
      <br />
      <br />
    </>
  );
};

export default About;
