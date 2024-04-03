import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import serv from "../assets/demo1.jpg";
import Footer1 from "../Components/Footer1";
import Treatmentinfo1 from "../Components/Treatmentinfo1";

function Services1() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimage={serv}
        title="Services"
        para="About our way of treatment"
        buttonclass="hide"
      />
      <Treatmentinfo1 />
      <Footer1 />

    </>
  );
}
export default Services1;
