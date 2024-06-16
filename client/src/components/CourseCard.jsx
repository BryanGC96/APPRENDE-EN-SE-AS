import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <Card>
      <h3> {course.title} </h3>
      <p> {course.description} </p>
      <Link to={`/courses/${course.title}/${course._id}`}> Ver Curso </Link>
    </Card>
  );
};

export default CourseCard;

const Card = styled.div`
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  width: 300px;
  text-align: center;
  background-color: #f8f1ff;

  h3 {
    color: #1c1d21;
    margin-bottom: 10px;
  }

  p {
    color: #1c1d21;
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
    color: #1c1d21;

    &:hover {
      text-decoration: underline;
      color: #343a40;
    }
  }
`;
