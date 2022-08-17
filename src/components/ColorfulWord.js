import React from "react";
import "../App";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const ColorfulWord = (props) => {
  const { word, color, bgcolor } = useParams();

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          word: word,
          backgroundColor: bgcolor,
          color: color,
        }}
      >
        This is My Word in Colors!
      </h1>

      <Link to={"/home"}>Go Home</Link>
    </div>
  );
};

export default ColorfulWord;
