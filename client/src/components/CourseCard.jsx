import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import numeros from "../assets/numeros.png";
import saludos from "../assets/saludos.png";
import animales from "../assets/animales.png";
import colores from "../assets/colores.png";

const CourseCard = ({ course }) => {
  let defaultImage;

  switch (course.title) {
    case "Numeros":
      defaultImage = numeros;
      break;
    case "Saludos":
      defaultImage = saludos;
      break;
    case "Animales":
      defaultImage = animales;
      break;
    case "Colores":
      defaultImage = colores;
      break;
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
  width: 350px;
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
