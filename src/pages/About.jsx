import React from "react";
import DisplayLinks from "../components/DisplayLinks";
import { useParams } from "react-router-dom";

const About = () => {
  const { id, name } = useParams();
  return (
    <div>
      <DisplayLinks />
      <h1>This is About Page.</h1>
      <p>Id:{id}</p>
      <p>Name: {name}</p>
    </div>
  );
};

export default About;
