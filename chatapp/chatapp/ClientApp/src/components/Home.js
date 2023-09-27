import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { templateFunction } from "../slices/templateSlice";

const Home = () => {
  // const templateGetItem = useSelector()
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(templateFunction("test log"))}
    >
      Hello, world!
    </div>
  );
};

export default Home;
