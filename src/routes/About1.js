import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import "../Components/Aboutstyle.css";
import Aboutimg from "../assets/test1.jpg";
import Footer1 from "../Components/Footer1";
function About1() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimage={Aboutimg}
        title="About"
        para="About the process"
        buttonclass="hide"
      />
      <h1 className="h1">About PTSD and Phobias</h1>
      <p className="p1">
        Phobias and PTSD are significant mental health conditions, causing
        irrational fears and traumatic stress reactions. Both can severely
        impact daily life and relationships. However, with proper diagnosis and
        treatment like therapy and medication, individuals can effectively
        manage and overcome these challenges, improving their mental health and
        overall well-being.
      </p>
      <h1 className="h2">About Vitual Therapy</h1>
      <p className="p2">
        Virtual reality (VR) immerses users in digital worlds through
        specialized headsets, engaging multiple senses for lifelike experiences.
        It has diverse applications, from entertainment to healthcare and
        training simulations, revolutionizing how we interact with digital
        content.
      </p>
      <h1 className="h3">About Virtual Reality Graded Exposure Therapy</h1>
      <p className="p3">
        Virtual Reality Graded Exposure Therapy (VRGET) is a cutting-edge method
        in mental health treatment, using immersive technology to gradually
        expose individuals to anxiety triggers. It's highly effective for
        various anxiety disorders, aiding in fear management and enhancing
        treatment engagement. This innovative approach offers tailored virtual
        environments, promoting safer and more controlled exposure experiences
        for patients.
      </p>
      <h1 className="h4">
        Benefits of Virtual Reality Graded Exposure Therapy
      </h1>
      <p className="p4">
        Virtual Reality Graded Exposure Therapy (VRGET) provides a safe
        environment for individuals to confront fears gradually. Highly
        customizable, it tailors virtual environments to specific needs,
        enhancing treatment outcomes. VRGET boosts engagement and adherence
        compared to traditional methods, promising improved care for anxiety
        disorders.
      </p>
      <h1 className="h5">About Our way of treatment</h1>
      <p className="p5">
        At first the patient is asked to consult a psychiatrist.After this the
        psychiatrist will analysis the patient's responses and find outs what is
        reason for this sisuation and meet with the VR team to create virtual
        environment.The patient is given tutorials on how to use the VR.The
        patient is also asked to wear the patient monitoring system.As the VRGET
        treatment starts the monitoring system will measure the patient's
        vitals.If the patient feels uncomfortable the session is stopped and the
        patient is asked to take post session feedback.Else the level of virtual
        environment is increased and the patient undergo the treatment.After
        that post session feedback is given and future treatment plans are
        discussed.{" "}
      </p>
        
      <Footer1 />
    </>
  );
}
export default About1;
