import React from "react";

const ConstVar = () => {
  let b = 40;
  if (b > 30) {
    console.log("true");
  }
  b = 50;
  console.log(b);
};

export default ConstVar;
