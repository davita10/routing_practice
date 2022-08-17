import React from "react";
import { Link } from "react-router-dom";
import "../App";
import { useParams } from "react-router";

const MyWord = (props) => {
  const { word } = useParams();

  return (
    <div>
      <h1 style={{ textAlign: "center", word: "word" }}>My Word is: {word}</h1>
      <Link to={"/home"}>Go Back Home</Link>
    </div>
  );
};

export default MyWord;
