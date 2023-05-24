import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthCheck from "../middleware/AuthCheck";
import MyNavbar from "../MyNavbar";

const AddToPage = (props) => {
  const navigate = useNavigate();
  const [semName, setSemName] = useState("");
  const [courseName, setCourseName] = useState("");
  AuthCheck();
  const addHandler = (e) => {
    e.preventDefault();
    const userInputData = {
      id: Math.random(),
      semName,
      courseName,
    };
    const getCourse = localStorage.getItem("courseList")
      ? JSON.parse(localStorage.getItem("courseList"))
      : [];
    getCourse.push(userInputData);
    localStorage.setItem("courseList", JSON.stringify(getCourse));
    navigate("/");
  };
  return (
    <>
      <MyNavbar />
      <div className="container add_page_wrap">
        <h2>Add To List: </h2>
        <form onSubmit={addHandler}>
          <input
            type="text"
            placeholder="Semester"
            value={semName}
            onChange={(e) => setSemName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Course Name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
          <button>Add To List</button>
        </form>
      </div>
    </>
  );
};

export default AddToPage;
