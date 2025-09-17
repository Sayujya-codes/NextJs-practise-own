import React from "react";

const RenderList = () => {
  const array = ["option 1", "option 2", "option 3"];
  let double = [];
  if (array.length > 0) {
    double = array.map((items) => {
      return items;
    });
  } else {
    return "The array is empty!";
  }

  return (
    <div>
      <h3>{double}</h3>
    </div>
  );
};

export default RenderList;
