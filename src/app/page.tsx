
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
      <Team/>
      <Membership/>
      <Offer/>
      <br />
    </>
  );
}

export default HomePage;
