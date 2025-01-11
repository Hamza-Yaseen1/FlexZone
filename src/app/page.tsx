
import Navbar from './Components/Navbar';
import HeroFetcher from './Components/HeroFetcher';
import TranningProgram from './Components/trainingProgram';
import Team from './Components/team';
import Membership from './Components/MemberShip';
const HomePage: React.FC = () => {
  
     

  
  return (
    <div>
      <Navbar />
      <HeroFetcher />
      <TranningProgram/>
      <Team/>
      <Membership/>
    </div>
  );
}

export default HomePage;
