import React from 'react';
import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';

const CourseDetail = () => {
    const { id } = useParams();
    const location = useLocation();
    const { title, description, videoId } = location.state || { title: '', description: '', videoId: '' };

    console.log(videoId);
    console.log(title);
    

    return (
        <DetailContainer>
            <h2> {title} </h2>
            <p> {description} </p>
            <VideoWrapper>
            <iframe
                width="560"
                height="300"
                src={videoId}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="youtube video"
            />
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
    
    text-align: center;
    background-color: #DECDF5;
    height: 100vh;

h2 {
    margin-bottom: 1rem;
    color: #1C1D21;
}

p {
    margin-bottom: 2rem;
    color: #1C1D21;
}
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  height: auto;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;