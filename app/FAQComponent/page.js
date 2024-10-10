import FAQComponent from "../../Components/FAQComponent";
import React from 'react';


function FAQComponentWrapper() { // Changed the function name for clarity
  return (
    <div>
      <Navbar></Navbar>
      <FAQComponent />
    </div>
  );
}

export default FAQComponentWrapper; // Added space between default and the component name
