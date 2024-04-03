import "./Treatmentinfo1.css";
import Treatmentinfodata1 from "./Treatmentinfodata1";
import a1 from "../assets/step1.jpg";
import a2 from "../assets/step2.jpg";
import a3 from "../assets/step3.jpg";

function Treatmentinfo1() {
  return (
    <div className="info">
      <h1>Steps to erradicate your fears....</h1>
      <p>
        learn more about the steps which helps you to recover from your fears
      </p>
      <div className="treatmentcard">
        <Treatmentinfodata1
          test={a1}
          heading="One to one consultation with psychiatrist"
          text="The patient is asked to meet a psychiatrist to idetnify the PTSD or phobia and it's level so that the doctor can finailize the treatment plan and the vrget environment used for the treatment"
        />
        <Treatmentinfodata1
          test={a2}
          heading="VRGET session with patient monitoring system"
          text="The patient uses the VRGET system and the patient's vitals will be monitored using state of the art patient monitoring system"
        />
        <Treatmentinfodata1
          test={a3}
          heading="Analyzing of the post session feedback"
          text="The patient is asked to post session feedback to plan the next step to be taken in the treatment"
        />
      </div>
    </div>
  );
}
export default Treatmentinfo1;
