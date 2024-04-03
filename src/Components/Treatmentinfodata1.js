import "./Treatmentinfo1.css";

function Treatmentdata(props) {
  return (
    <div className="t-card">
      <div className="treatimg">
        <img alt="img info" src={props.test} />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}
export default Treatmentdata;
