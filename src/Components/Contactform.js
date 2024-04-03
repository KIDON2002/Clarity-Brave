import React from "react";
import "./Contactformstyle.css";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("mwkgryob");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="label1" htmlFor="email">
        Email Address*
      </label>
      <input className="input1" id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label className="label2" htmlFor="Name">
        Full Name*
      </label>
      <input className="input2" id="text" name="Name" />
      <label className="label3" htmlFor="message">
        Message*
      </label>
      <textarea className="input3" id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <label className="label4" htmlFor="message1">
        If your are a psycologist or a VR expert and willing to provide a
        helping hand by joining us please mention here.
      </label>
      <textarea className="input4" id="message1" name="inquiry" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function App() {
  return <ContactForm />;
}
export default ContactForm;
