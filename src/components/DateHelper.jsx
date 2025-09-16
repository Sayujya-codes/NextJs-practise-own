import React from "react";
import Greetings from "./Greetings";

const DateHelper = () => {
  const getDate = new Date();
  const formattedTime = getDate.toLocaleTimeString();
  const date = getDate.getHours();
  let message;
  let user = "Sayujya";

  if (date < 12) {
    message = "Good Morning!";
  } else if (date > 12 && date < 17) {
    message = "Good Afternoon!";
  } else {
    message = "Good Evening!";
  }

  return (
    <>
      {/* <h1>{formattedTime}</h1> */}
      <h4>The time is:</h4>
      <Greetings title={formattedTime} />
      <br />
      <Greetings title1={message} />
      <br />
      <Greetings title2={user} />
    </>
  );
};

export default DateHelper;
