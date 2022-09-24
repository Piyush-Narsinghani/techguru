import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "I adore coding.",
          "My goal is to work as a software engineer.",
          "I graduated from Lovely Professional University with a master's in computer applications.",
          "I received a bachelor's degree in computer applications from Guru Nanak Dev University.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
