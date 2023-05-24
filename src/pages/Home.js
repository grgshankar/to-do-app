import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import MyNavbar from "../MyNavbar";
import AuthCheck from "../middleware/AuthCheck";

const Home = () => {
  const navigate = useNavigate();
  const getCourse = JSON.parse(localStorage.getItem("courseList"));
  const [course, setCourse] = useState(getCourse ? getCourse : []);
  AuthCheck();
  const removeList = (data) => {
    const removeData = course.filter((item) => item.id !== data);
    // console.log("removeData", removeData);
    setCourse(removeData);
    localStorage.setItem("courseList", JSON.stringify(removeData));
    navigate("/");
  };
  return (
    <>
      <MyNavbar />
      <div className="container list_row">
        {course.length > 0 ? (
          <>
            {course
              .slice(0)
              .reverse()
              .map((data) => (
                <div className="list_wrap" key={data.id}>
                  <span>{data.semName}</span>
                  <strong>{data.courseName}</strong>
                  <Link to={`/view/${data.id}`}>
                    <AiFillEye />
                  </Link>
                  <button onClick={() => removeList(data.id)}>
                    <RiDeleteBin5Fill />
                  </button>
                </div>
              ))}
          </>
        ) : (
          <>
            <p>Please fill up the form</p>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
