import React, { useRef, useState, useEffect } from "react";
import "./Certificate.css";
import certificateData from "../../utils/certificateData.js";
import { useTheme } from "../../context/ThemeContext.js";

const Certificate = () => {
  const scrollRef = useRef(null);
  const [theme] = useTheme();

  // Buttons ke visibility state
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  const scrollAmount = 520; // jitna scroll karna hai

  // Scroll karne wale functions
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Scroll event handle karenge taaki pata chale position kya hai
  const handleScroll = () => {
    const scrollLeftPos = scrollRef.current.scrollLeft;
    const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

    setShowPrev(scrollLeftPos > 0);
    setShowNext(scrollLeftPos < maxScrollLeft - 5); // 5px tolerance for rounding
  };

  // Scroll event add karenge on mount
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`certificate-section ${theme}`} id="certificate">
      <h2>My Certificates</h2>

      <div className="scroll-buttons">
        {showPrev && (
          <button className="first-child" onClick={scrollLeft}>
            &larr;
          </button>
        )}
        <div className="certificate-scroll" ref={scrollRef}>
          {certificateData.map((cert) => (
            <div className="certificate-card" key={cert.id}>
              <img src={cert.image} alt={`Certificate ${cert.id}`} />
              <h3>{cert.title}</h3>
              <p>{cert.org}</p>
            </div>
          ))}
        </div>
        {showNext && (
          <button onClick={scrollRight}>
            &rarr;
          </button>
        )}
      </div>
    </div>
  );
};

export default Certificate;
