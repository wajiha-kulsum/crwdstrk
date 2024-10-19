import Navbar from "@/components/Navbar";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import FAQComponent from "@/components/ui/accordion";
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
       <Section2/>
       <FAQComponent/>
     
      <Footer/>


    </div>
  );
};

export default Home;
