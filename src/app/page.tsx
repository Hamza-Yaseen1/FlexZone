
import Navbar from './Components/Navbar';
import HeroFetcher from './Components/HeroFetcher';
import TranningProgram from './Components/trainingProgram';
import Team from './Components/team';
import Membership from './Components/MemberShip';
import Offer from './Components/Offer';
import Footer from './Components/footer';
const HomePage: React.FC = () => {
  
     

  
  return (
    <>
      <Navbar />
      <HeroFetcher />
      <TranningProgram/>
      <Team/>
      <Membership/>
      <Offer/>
      <br />
      <Footer/>
    </>
  );
}

export default HomePage;
