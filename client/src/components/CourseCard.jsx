import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CourseCard = ({ course }) => {
  let defaultImage;

  switch (course.title) {
    case "Numeros":
      defaultImage = "../../src/assets/numeros.png";
      break;
    case "Saludos":
      defaultImage = "../../src/assets/saludos.png";
      break;
    case "Animales":
      defaultImage = "../../src/assets/animales.png";
      break;
    case "Colores":
      defaultImage = "../../src/assets/colores.png";
      break;
    default:
      defaultImage = ""; // Manejo del caso predeterminado
  }

  return (
    <Card>
      <CourseImage src={defaultImage} alt={course.title} />
      <h3> {course.title} </h3>
      <p> {course.description} </p>
      <Link to={`/courses/${course.title}/${course._id}`}> Ver Curso </Link>
    </Card>
  );
};

export default CourseCard;

const CourseImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

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
