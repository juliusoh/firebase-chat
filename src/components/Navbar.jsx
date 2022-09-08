import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Firebase Chat</span>
      <div className="user">
        <img
          src="https://images.unsplash.com/photo-1662548293729-0da75f4178d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <span>Julius</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
