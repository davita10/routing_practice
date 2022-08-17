import React from "react";
import { Link } from "react-router-dom";
import "../App";
import { useParams } from "react-router";

const MyNum = (props) => {
  const { num } = useParams();

  return (
    <div>
      {/* isNaN(word) ? */}
      {/* <h1 style={{ textAlign: "center" }}>My Word is: </h1>: */}
      <h1 style={{ textAlign: "center" }}>My Number is: {num}</h1>
      {/* : null */}
      <Link to={"/home"}>Go Home</Link>
    </div>
  );
};

export default MyNum;
