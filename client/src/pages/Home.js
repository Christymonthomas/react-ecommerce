import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import { useAuth } from "../context/auth";

const Home = () => {
  return (
    <div>
      <Jumbotron title="Hello World" subTitle="Welcome to React E-Commerce" />
    </div>
  );
};

export default Home;
