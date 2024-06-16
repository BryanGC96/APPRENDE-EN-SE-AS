import React from "react";
import styled from "styled-components";
import CourseCard from "../components/CourseCard";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_COURSES, GET_ONE_COURSE } from "../utils/queries.js";

const CourseListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background-color: #decdf5;
`;

const CourseList = () => {
  const { choice } = useParams();
  console.log(choice);

  const { data } = useQuery(choice === "Todos" ? GET_COURSES : GET_ONE_COURSE, {
    variables: {
      title: choice,
    },
  });

  const singleCourse = data?.courseByName || {};
  const allCourses = data?.courses || [];
  //   const info = data?.courses || data?.course || {};
  console.log(singleCourse);

  return (
    <CourseListContainer>
      {choice === "Todos" ? (
        allCourses?.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))
      ) : (
        <CourseCard course={singleCourse} />
      )}
    </CourseListContainer>
  );
};

export default CourseList;
