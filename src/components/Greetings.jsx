import React from "react";

const Greetings = (props) => {
  return (
    <div>
      {/* <h1>test</h1> */}
      {props.title}
      {props.title1}
      {props.title2}
    </div>
  );
};

export default Greetings;
