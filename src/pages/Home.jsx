import { HeroSection } from "../components/UI/HeroSection";
import { About } from "./About"; 
import { Country } from "./Country";
import { Footer} from "../components/UI/Footer";
export const Home = () => {
  // Format of Homepage 
  return (
    <>
      <HeroSection />
      <About />
      <Country />
    </>
  );
};
