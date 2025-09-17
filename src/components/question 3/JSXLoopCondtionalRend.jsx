import React from "react";

const JSXLoopCondtionalRend = () => {
  let role = "admin";
  let disp = [];
  let showrole;
  let btn;
  const sublist = ["Student A", "Student B", "Student C"];

  if (role === "admin") {
    showrole = <h1>This is Admin</h1>;

    <h2>Welcome Admin</h2>;
    disp = sublist.map((items) => {
      return items;
    });
    btn = <button>Add</button>;
  } else if (role === "student") {
    showrole = <h1>This is a student role</h1>;
  } else {
    showrole = <h1>This is a user</h1>;
  }
  return (
    <>
      {showrole}
      <div>{disp}</div>
      <br />
      {btn}
    </>
  );
};

export default JSXLoopCondtionalRend;
