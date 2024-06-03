import React, { useState } from "react";

import Jumbotron from "../components/cards/Jumbotron";

const Register = () => {
  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(name, password, email);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <Jumbotron title="Register" />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control mb-4 p-2"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
              <input
                type="email"
                className="form-control mb-4 p-2"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="form-control mb-4 p-2"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
            <pre>{JSON.stringify(name, null, 4)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
