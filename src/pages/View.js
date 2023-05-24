import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyNavbar from "../MyNavbar";

const View = () => {
  //   const getParams = useParams();
  //   const getId = getParams.id;
  //   const [details, setDetails] = useState({});
  //   const getCourse = localStorage.getItem("courseList")
  //     ? JSON.parse(localStorage.getItem("courseList"))
  //     : [];
  //   const getData = getCourse.filter((item) => item.id == getId);
  //   setDetails(getData[0]);

  const { id } = useParams(); // Use object destructuring to get the id directly
  const [details, setDetails] = useState({});

  useEffect(() => {
    const getCourse = localStorage.getItem("courseList")
      ? JSON.parse(localStorage.getItem("courseList"))
      : [];
    const getData = getCourse.filter((item) => item.id == id);
    setDetails(getData[0]);
  }, [id]);

  return (
    <>
      <MyNavbar />
      <div className="container">
        <span>name: {details.semName}</span>
        <br></br>
        <strong>{details.courseName}</strong>
      </div>
    </>
  );
};

export default View;
