import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, We are<span className="purple"> TECH GURU SERVICES PVT. LTD. </span>
            from <span className="purple"> Punjab, India.</span>
            <br />We provide tech support.
            <br />
            <br />
            Apart from providing tech support, some other activities that we love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Outsource developers
            </li>
            <li className="about-activity">
              <ImPointRight /> Build projects
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to Support Teams that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">TECH GURU SERVICES PVT. LTD.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
