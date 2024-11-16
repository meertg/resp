import React, { useState, useEffect } from "react";
import "./Team.css";

export default function Team() {
  const [buttonText, setButtonText] = useState("View Team");

  useEffect(() => {
    const handleResize = () => {
      setButtonText(window.innerWidth <= 760 ? "Learn More" : "View Team");
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="team">
      <span>
        <p>team</p>
        <h1>Our Talents</h1>
        <h2>Lorem ipsum, dolor sit amet consectetur Suscipit nemo hic quos, ab,</h2>
      </span>
      <section>
        <ul>
          <img src="./imgs/person1.svg" alt="Person 1" />
          <p className="name">Peg Legge</p>
          <p>ceo</p>
        </ul>
        <ul>
          <img src="./imgs/person2.svg" alt="Person 2" />
          <p className="name">Peg Legge</p>
          <p>ceo</p>
        </ul>
        <ul>
          <img src="./imgs/person3.svg" alt="Person 3" />
          <p className="name">Peg Legge</p>
          <p>ceo</p>
        </ul>
        <ul>
          <img src="./imgs/person4.svg" alt="Person 4" />
          <p className="name">Peg Legge</p>
          <p>ceo</p>
        </ul>
      </section>
      <button>{buttonText}</button>
    </div>
  );
}
