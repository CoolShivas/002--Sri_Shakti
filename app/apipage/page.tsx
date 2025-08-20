"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { fetchUniformApiServer } from "../redux/slice";

const ApiPage = () => {
  const dispatch = useDispatch();

  const handlerOnGetApiBtn = () => {
    dispatch(fetchUniformApiServer()); // Attaching the action with the btn;
  };

  return (
    <>
      <center>
        <h1 className="font-bold text-3xl p-3 mr-5">
          Welcome to the Fetch Api Page
        </h1>
        <button
          className="bg-sky-400 p-3 text-white text-xl rounded-full hover:bg-green-500"
          onClick={handlerOnGetApiBtn}
        >
          Get Api Data
        </button>
      </center>
    </>
  );
};

export default ApiPage;
