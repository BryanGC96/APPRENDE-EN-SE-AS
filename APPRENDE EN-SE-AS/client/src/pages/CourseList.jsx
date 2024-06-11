import React from 'react';
import styled from 'styled-components';
import CourseCard from '../components/CourseCard';

const CourseList = () => {
    const courses = [
        { id: 1, title: '¡Aprende a codificar HTML súper rápido! 🚀', description: 'Primera parte del curso de HTML', videoId: 'https://www.youtube.com/embed/IgrobRiJfjw'},
        { id: 2, title: '¡Aprende a codificar HTML súper rápido! 🚀 Parte 2', description: 'Segunda parte del curso de HTML', videoId: 'https://www.youtube.com/embed/IgrobRiJfjw'},
        { id: 3, title: '¿Qué es el lenguaje de programación Java? en LSM', description: 'Introducción al lenguaje de programación Java', videoId: 'https://www.youtube.com/embed/KQj2uHZq_Tg'},
    ];

    return (
        <CourseListContainer>
            {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </CourseListContainer>
    );
};

export default CourseList;

const CourseListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px;
    background-color: #DECDF5;
`;