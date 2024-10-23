import Navbar from "@/components/Navbar";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section1 from "@/components/Section1";
import Feature_card from "@/components/Feature_card";
import FAQComponent from "@/components/SasslyFeatures";
import Footer from "@/components/Footer";
import TestButton from "@/components/testbutton";



const Home: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <br/>
      <Section3/>
      <TestButton/>
      <Section1/>
      <Section4/>
      <Feature_card/>
      <FAQComponent/>     
      <Footer/>
    </div>
  );
};

export default Home;
