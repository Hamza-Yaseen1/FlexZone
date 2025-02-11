import MainCard from "../Components/Maincard";
import Offer from "../Components/Offer";
import Membership from "../Components/MemberShip";
import Team from "../Components/team";
const Price = () => {
    return (
      <div>
        <MainCard
          PageName="Pricing"
          headingLine1="Choose the offer"
          headingLine2="that best suits you"
          para="Discover our offers adapted to your editorial maturity and your budget."
          bottomLinks={[
            "",
          ]} footerLink={""}        />
           <Membership/>
           <h1 className="text-3xl p-5 font-bold text-center">Our Team</h1>

           <Team/>
           <Offer/>
      </div>
    );
  };
  
  export default Price;
  