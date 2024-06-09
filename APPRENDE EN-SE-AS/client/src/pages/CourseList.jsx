import React from 'react';
import stylñed from 'styled-components';
import CourseCard from '../components/CourseCard';

const CourseList = () => {
    const courses = [
        { id: 1, title: 'Course 1', description: 'Course 1 description'},
        { id: 2, title: 'Course 2', description: 'Course 2 description'},
        { id: 3, title: 'Course 3', description: 'Course 3 description'},
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
    margin: 20px;
`;