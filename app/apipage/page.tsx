"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUniformApiServer } from "../redux/slice";

const ApiPage = () => {
  const dispatch = useDispatch();

  // const getFetchApiData = useSelector((data) => data);
  // console.log(getFetchApiData);
  // // // Getting data before btn click after refresh page on console as :-

  // // // {uniformData: {…}}
  // // // uniformData:
  // // // uniformArr: Array(0)
  // // // length: 0
  // // // [[Prototype]]: Array(0)
  // // // [[Prototype]]: Object
  // // // [[Prototype]]: Object

  // // // Getting data after btn click on console as :-
  // // // {uniformData: {…}}
  // // // uniformData: {uniformArr: Array(17), isloading: false}
  // // // [[Prototype]]: Object

  const getFetchApiData = useSelector((data) => data.uniformData.uniformArr);
  console.log(getFetchApiData);
  // // // Getting data before btn click after refresh page on console as :- []

  // // // Getting data after btn click on console as :- (17) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

  // const handlerOnGetApiBtn = () => {
  //   dispatch(fetchUniformApiServer()); // Attaching the action with the btn;
  // };

  useEffect(() => {
    dispatch(fetchUniformApiServer());
  }, []);

  return (
    <>
      <center>
        <h1 className="font-bold text-3xl p-3 mr-5">
          Welcome to the Fetch Api Page
        </h1>
        {/* <button
          className="bg-sky-400 p-3 text-white text-xl rounded-full hover:bg-green-500"
          onClick={handlerOnGetApiBtn}
        >
          Get Api Data
        </button> */}

        {getFetchApiData.map((curElem, index) => {
          return (
            <div key={index}>
              <div>
                <h1>{curElem.title}</h1>
                <p>{curElem.uniformCode}</p>
                <img src={curElem.image} alt="image not found" />
                <p>{curElem.uniformType}</p>
                <h1>{curElem.description}</h1>
              </div>
            </div>
          );
        })}
      </center>
    </>
  );
};

export default ApiPage;
