import "./signupp.css";
import React from "react";
function Signupp() {
  return (
    <div className="formf">
      <h1>Login</h1>
      <form>
        <div className="email">
          <h2>Email</h2>
          <input />
        </div>
        <div className="password">
          <h2>Password</h2>
          <input />
        </div>

        <button>LOGIN</button>
      </form>
    </div>
  );
}
export default Signupp;
