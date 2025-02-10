
import HeroFetcher from './Components/HeroFetcher';
import TranningProgram from './Components/trainingProgram';
import Team from './Components/team';
import Membership from './Components/MemberShip';
import Offer from './Components/Offer';
const HomePage: React.FC = () => {
  
     

  
  return (
    <>
      <HeroFetcher />
      <TranningProgram/>
      <h1 className="text-3xl p-5 font-bold text-center">Our Team</h1>
      <Team/>
      <Membership/>
      <Offer/>
      <br />
    </>
  );
}

export default HomePage;
