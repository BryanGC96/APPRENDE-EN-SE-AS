import { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_COURSE_BY_ID } from "../utils/queries";

const CourseDetail = () => {
  const { id, course } = useParams();
  let defaultVideo;

  if (course === "Numeros") {
    defaultVideo = "https://www.youtube.com/embed/8QT7MlxaSPU";
  } else if (course === "Saludos") {
    defaultVideo = "https://www.youtube.com/embed/VWnQGLJDY6M";
  } else if (course === "Animales") {
    defaultVideo = "https://www.youtube.com/embed/GLQBgHN47u0";
  } else if (course === "Colores") {
    defaultVideo = "https://www.youtube.com/embed/LUve7X89p4o";
  } 
  

  const [video, setVideo] = useState({
    video_url: defaultVideo,
  });

  const { data } = useQuery(GET_COURSE_BY_ID, {
    variables: {
      courseId: id,
    },
  });

  const courseData = data?.courseById || {};

  return (
    <div style={{ padding: "15% 2%" }}>
      <CourseContainer>
        <ContentWrapper>
          <VideoSection>
            <Title>{courseData.title} {video.title}</Title>
            <VideoWrapper>
              <iframe
                title={video.title}
                src={video.video_url}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </VideoWrapper>
            <CommentsSection>
              <h3>Comments</h3>
              <Comments>Comments will be displayed here.</Comments>
            </CommentsSection>
          </VideoSection>
          <Sidebar>
            <SidebarTitle>Course Content</SidebarTitle>
            <VideoList>
              {courseData.videos?.map((video, i) => (
                <VideoItem key={i} onClick={() => setVideo(video)}>
                  <h4>{video.title}</h4>
                </VideoItem>
              ))}
            </VideoList>
          </Sidebar>
        </ContentWrapper>
      </CourseContainer>
    </div>
  );
};

export default CourseDetail;

const CourseContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
`;

const VideoSection = styled.div`
  flex: 3;
  margin-right: 2rem;

  h2 {
    margin-bottom: 1rem;
    color: #343a40;
  }
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  color: #343a40;
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const CommentsSection = styled.div`
  margin-top: 2rem;
`;

const Comments = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
  color: #6c757d;
`;

const Sidebar = styled.aside`
  flex: 1;
  border-left: 1px solid #dee2e6;
  padding-left: 2rem;
  max-width: 300px;
`;

const SidebarTitle = styled.h3`
  margin-bottom: 1rem;
  color: #343a40;
`;

const VideoList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const VideoItem = styled.li`
  margin-bottom: 1rem;
  cursor: pointer;
  h4 {
    margin: 0;
    color: #007bff;
    transition: color 0.3s;
    &:hover {
      color: #0056b3;
    }
  }
`;
