import "./Contact.css";
import {useEffect} from "react";
import Nav2Bar from "./Nav2Bar.js";

function Contact() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
      <Nav2Bar />
      <div className="contact-co1">
        <div className="co1-container">
          <h1>Want to work with me ?</h1>
          <h3>Let's Talk...</h3>

          {/* want to work with me?
           */}

          <form className="co1-form">
            <label htmlFor="inp1">name</label>
            <input className="co1-inputs" id="inp1" type="text" />
            <br />
            <label htmlFor="inp2">budget</label>
            <input className="co1-inputs" id="inp2" type="text" />
            <br />
            <label htmlFor="inp4">time </label>
            <input className="co1-inputs" id="inp4" type="text" />
            <br />
            <label htmlFor="inp3">email</label>
            <input className="co1-inputs" id="inp3" type="text" />
            <button className="form-btn" type="submit">
              Send
            </button>
          </form>
          <div className="line-wrapper">
            <span className="line-words target-1">Contact Me &nbsp;</span>
            <span className="line-words target-2">Contact Me &nbsp;</span>
            <span className="line-words target-3">Contact Me &nbsp;</span>
            <span className="line-words target-4">Contact Me &nbsp;</span>
            <span className="line-words target-5">Contact Me &nbsp;</span>
            <span className="line-words target-6">Contact Me &nbsp;</span>
            <span className="line-words target-7">Contact Me &nbsp;</span>
            <span className="line-words target-8">Contact Me &nbsp;</span>
            <span className="line-words target-9">Contact Me &nbsp;</span>
            <span className="line-words target-10">Contact Me &nbsp;</span>
            <span className="line-words target-11">Contact Me &nbsp;</span>
            <span className="line-words target-12">Contact Me &nbsp;</span>
            <span className="line-words target-13">Contact Me &nbsp;</span>
            <span className="line-words target-14">Contact Me &nbsp;</span>
            <span className="line-words target-15">Contact Me &nbsp;</span>
            <span className="line-words target-16">Contact Me &nbsp;</span>
            <span className="line-words target-17">Contact Me &nbsp;</span>
            <span className="line-words target-18">Contact Me &nbsp;</span>
            <span className="line-words target-19">Contact Me &nbsp;</span>
            <span className="line-words target-20">Contact Me &nbsp;</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
