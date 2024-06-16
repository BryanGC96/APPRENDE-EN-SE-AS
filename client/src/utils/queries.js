import { gql } from "@apollo/client";

export const GET_COURSES = gql`
  query courses {
    courses {
      _id
      description
      subscriberCount
      subscribers {
        _id
      }
      title
      videos {
        _id
      }
    }
  }
`;

export const GET_ONE_COURSE = gql`
  query courseByName($title: String!) {
    courseByName(title: $title) {
      _id
      description
      title
      subscriberCount
    }
  }
`;

export const GET_COURSE_BY_ID = gql`
  query courseById($courseId: ID!) {
    courseById(courseId: $courseId) {
      _id
      title
      videos {
        _id
        title
        description
        video_url
        category
      }
    }
  }
`;
