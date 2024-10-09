import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import FAQComponent from "../../Components/FAQComponent";
import SasslyFeatures from "../../Components/SasslyFeatures"; // Add the import
import Section1 from "../../Components/Section1";
import Section2 from "../../Components/Section2";
import Section3 from "../../Components/Section3";
import Section4 from "../../Components/Section4";
export default function Home() {
  return (
    <>
      <Navbar />
      <br/>

       <Section3/>

      <SasslyFeatures /> {/* Use the SasslyFeatures component */}

      <Section4/>
   
      <Section1/>

      <Section2/>

      <FAQComponent />
     
      <Footer />
    </>
  );
}
