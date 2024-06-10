import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    return (
        <Card>
            <h3> {course.title} </h3>
            <p> {course.description} </p>
            <Link to={`/course/${course.id}`}> Ver Curso </Link>
        </Card>
    );
};

export default CourseCard;

const Card = styled.div`
    border: px solid #1B998B;
    border-radius: 10px;
    padding: 20px;
    margin: 20px;
    width: 300px;
    text-align: center;
    background-color: #DECDF5;

    h3 {
        color: #1C1D21;
        margin-bottom: 10px
    }

    p {
        color: #1C1D21;
        margin-bottom: 20px
    }

    a {
        text-decoration: none;
        color: #1C1D21;

        &:hover {
            text-decoration: underline;
            color: #343a40;
        }
    }
`;