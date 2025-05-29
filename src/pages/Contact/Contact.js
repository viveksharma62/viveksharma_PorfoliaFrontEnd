import React, { useState } from "react";
import "./Contact.css";
import { FaLinkedin  } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { MdOutgoingMail } from "react-icons/md";
import { Rotate, LightSpeed } from "react-reveal";

const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Please provide name & email");
      return;
    }

    try {
      const res = await fetch("http://localhost:8006/api/register", {  // full backend URL
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          number,
          email,
          message
        })
      });

      if (res.ok) {
        alert("Message successfully sent");
        setName("");
        setNumber("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message");
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="card card0 border-0">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="card1">
              <div className="row border-line">
                <LightSpeed>
                  <img
                    src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=900&t=st=1722859904~exp=1722860504~hmac=0228f968f0d01c4721c2a1a29f59888ba9c860b39fac3824c0b59bccc83d919b"
                    alt="contact"
                    className="image"
                  />
                </LightSpeed>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <Rotate>
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  {/* <div className="row">
                    <h6>
                      <FaLinkedin color="blue" size={20} className="ms-2" />
                      <BsGithub color="black" size={20} className="ms-2" />
                      <MdOutgoingMail color="red" size={20} className="ms-2" />
                      <FaFacebook color="blue" size={20} className="ms-2" />
                    </h6>
                  </div> */}
                  <div className="row">
                    <h6>
                      <a href="https://www.linkedin.com/in/vivek-kumar-35637b26a/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin color="blue" size={20} className="ms-2" />
                      </a>
                      <a href="https://github.com/viveksharma62" target="_blank" rel="noopener noreferrer">
                        <BsGithub color="black" size={20} className="ms-2" />
                      </a>
                      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vivekkumar.117942@marwadiuniversity.ac.in" 
                      target="_blank" 
                      rel="noopener noreferrer">
                      <MdOutgoingMail color="red" size={20} className="ms-2" />
                    </a>

                      <a href="https://leetcode.com/u/vivekkumar117942/" target="_blank" rel="noopener noreferrer">
                        <SiLeetcode  color="blue" size={20} className="ms-2" />
                      </a>
                    </h6>
                  </div>


                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>

                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      className="mb-3"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="row px-3">
                    <input
                      type="text"
                      name="number"
                      placeholder="Enter Your Number"
                      className="mb-3"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>

                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      className="mb-3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="row px-3">
                    <textarea
                      name="msg"
                      placeholder="Enter Your Message"
                      className="mb-3"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <div className="row px-3">
                    <button className="button" type="submit" onClick={handleSubmit}>
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
            </Rotate>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
