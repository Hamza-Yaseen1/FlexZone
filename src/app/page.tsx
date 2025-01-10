
import Navbar from './Components/Navbar';
import HeroFetcher from './Components/HeroFetcher';
import TranningProgram from './Components/trainingProgram';
import Team from './Components/team';
const HomePage: React.FC = () => {
  
     

  
  return (
    <div>
      <Navbar />
      <HeroFetcher />
      <TranningProgram/>
      <Team/>
    </div>
  );
}

export default HomePage;
