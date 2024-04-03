import con from "../assets/ptsd.jpg";
import co from "../assets1/test2.jpg";
import c from "../assets1/demo02.jpg";
import "./Treatmentstyle.css";
const Treatment = () => {
  return (
    <div className="treat">
      <h1>ABOUT VRGET</h1>
      <p>By using the tech wisely everything is possible...</p>

      <div className="first">
        <div className="destext">
          <h2>About PTSD and Phobias</h2>
          <p>
            Phobias and PTSD are significant mental health conditions, causing
            irrational fears and traumatic stress reactions. Both can severely
            impact daily life and relationships. However, with proper diagnosis
            and treatment like therapy and medication, individuals can
            effectively manage and overcome these challenges, improving their
            mental health and overall well-being.
          </p>
        </div>

        <div className="ptsddesc">
          <img alt="ptsd and phobia" src={con} />
          <img alt="ptsd and phobia" src={co} />
        </div>
      </div>
      <div className="second">
        <div className="destext1">
          <h2>About Virtual reality</h2>
          <p>
            Virtual reality (VR) immerses users in digital worlds through
            specialized headsets, engaging multiple senses for lifelike
            experiences. It has diverse applications, from entertainment to
            healthcare and training simulations, revolutionizing how we interact
            with digital content.
          </p>
        </div>

        <div className="ptsddesc1">
          <img alt="ptsd and phobia" src={c} />
        </div>
      </div>
    </div>
  );
};
export default Treatment;
