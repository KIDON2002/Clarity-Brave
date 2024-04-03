import "./Footer1style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>CLARITY BRAVE</h1>
          <p>Join with us to erradicate your fears...</p>
        </div>
        <div>
          <a href="https://www.facebook.com/">
            <i className="fa-brands fa-facebook-square" />
          </a>
          <a href="https://www.instagram.com/">
            <i className="fa-brands fa-instagram-square" />
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Fast links</h4>
          <a href="/about">description</a>
          <a href="/services">our services</a>
          <a href="/contact">contact us</a>
          <h4>The Team</h4>
          <a href="https://www.linkedin.com/in/adith-menon-b01854272/?originalSubdomain=in">
            Adith Menon
          </a>
          <a href="https://www.linkedin.com/in/adwaidh-cr-b5a3ab21a/?originalSubdomain=in">
            Adwaidh C R
          </a>
          <a href="https://www.linkedin.com/in/anoysius-joju-297759251/?originalSubdomain=in">
            Anoysius Joju
          </a>
          <a href="https://www.linkedin.com/in/rithik-v-r-769180286/?originalSubdomain=in">
            Rithik V R
          </a>

          <h4> Contact The Team</h4>
          <a href="https://wa.me/7561099402">Adith Menon</a>
          <a href="https://wa.me/9745173251">Adwaidh C R</a>
          <a href="https://wa.me/7034597626">Anoysius Joju</a>
          <a href="https://wa.me/9778018514">Rithik V R</a>

          <h4> videos about VRGET</h4>
          <a href="https://youtu.be/RczmGUXtwSc?feature=shared">video 1</a>
          <a href="https://youtu.be/QCCWH_CNjM0?feature=shared">video 2</a>
          <a href="https://youtu.be/GMttQHMjbJo?feature=shared">video 3</a>
          <a href="https://youtu.be/CJ7MJAc1__E?feature=shared">video 4</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
