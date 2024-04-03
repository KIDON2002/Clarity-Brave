import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Hom1 from "../assets/de1.jpg";
import Treatment from "../Components/Treatment";
import Treatmentinfo1 from "../Components/Treatmentinfo1";
import Footer1 from "../Components/Footer1";
function Home1() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroimage={Hom1}
        title="It's your life"
        para="Choose the right way to eliminate your fears"
        buttonname="Let's Do It"
        url="/Contact"
        buttonclass="show"
      />
      <Treatment />
      <Treatmentinfo1 />
      <Footer1 />
    </>
  );
}
export default Home1;
