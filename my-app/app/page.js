import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container1 from "../components/Container1";
import Features from "@/components/Features";
import Therapist from "@/components/Therapist";
import Assesment from "@/components/Assesment";
import Slash from "@/components/Slash";


export default function Home() {
  return (
    <div className="bg-slate-200"> {/* Use a div instead of body */}
      <Slash/>
      <Container1 />
      <Features />
      <Therapist />
      <Assesment />

    </div>
  );
}
