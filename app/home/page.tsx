import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import FAQComponent from "../../Components/FAQComponent";
import SasslyFeatures from "../../Components/SasslyFeatures"; 
import Section1 from "../../Components/Section1";
import Section2 from "../../Components/Section2";
import Section3 from "../../Components/Section3";
import Section4 from "../../Components/Section4";
import MoodTracker from '../../Components/MoodTracker';
import Mood_chart from '../../Components/Mood_chart';

export default function Home() {
  return (
    <>
      <Navbar/>
      <br />
      <Section3 />
      <SasslyFeatures />
      <Section4 />
      <Section1 />
      <Section2 />
      <FAQComponent />
      <MoodTracker />
      <Mood_chart/>
      
    </>
  );
}
