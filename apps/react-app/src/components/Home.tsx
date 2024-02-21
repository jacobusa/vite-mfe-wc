import * as React from "react";
import { Link } from "react-router-dom";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <h1>heyyyyyyy</h1>
      <br />
      <Link to={"/comments"}>to comments</Link>
      <br />
      <Link to={"/info"}>to info</Link>
      <br />
      <button
        onClick={() => {
          window.navigateTo("/");
        }}
      >
        Navigate home
      </button>
    </>
  );
};
