import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
    const { id } = useParams();
    const course = { id, title: 'Course ' + id, description: 'Description of course ' + id };

    return (
        <DetailContainer>
            <h2> {course.title} </h2>
            <p> {course.description} </p>
            <Video controls>
                <source src="https://www.youtube.com/watch?v=dQw4w9WgXcQ" type="video/mp4" />
                Your browser does not support the video tag.
            </Video>
        </DetailContainer>
    );
};

export default CourseDetail;

const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 2rem;
    text-align: center;
    background-color: #DECDF5;
    
    h2 {
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 2rem;
    }
`;

const Video = styled.video`
    width: 100%;
    max-width: 600px;
    height: auto;
`;