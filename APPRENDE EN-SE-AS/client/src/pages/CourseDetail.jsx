import React from 'react';
import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';

const CourseDetail = () => {
    const { id } = useParams();
    const location = useLocation();
    const { title, description, videoUrl } = location.state || { title: '', description: '', videoUrl: '' };

    return (
        <DetailContainer>
            <h2> {title} </h2>
            <p> {description} </p>
            <VideoWrapper>
                <iframe
                width="100%"
                height="100%"
                src={videoUrl}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
            </VideoWrapper>
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
        color: #1C1D21;
    }

    p {
        margin-bottom: 2rem;
        color: #1C1D21;
    }
`;

const VideoWrapper = styled.video`
    width: 100%;
    max-width: 800px;
    height: auto;
`;