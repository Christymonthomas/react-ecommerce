import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import { useAuth } from "../context/auth";

const Home = () => {
  const [auth, setAuth] = useAuth();
  return (
    <div>
      <Jumbotron title="Hello World" subTitle="Welcome to React E-Commerce" />
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </div>
  );
};

export default Home;
