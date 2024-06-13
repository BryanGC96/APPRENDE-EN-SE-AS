const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String
    courses: [Course]!
}

type Course {
    _id: ID
    title: String
    description: String
    videos: [Video]
    subscribers: [User]
    subscriberCount: Int
}

type Video {
    _id: ID
    title: String
    description: String
    video_url: String
    category: String
    comments: [Comment]
}

type Comment {
    _id: ID
    commentText: String
    createdAt: String
  }

type Auth {
    token: ID!
    user: User
}

type Query {
    courses: [Course]
    course(courseId: ID!): Course   
    videos:[Video] 
    me: User
}

type Mutation {
    addUser (username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCourse(courseId: ID): User
    addComment(videoId: ID!, commentText: String!): Video
   
    

}


`;

module.exports = typeDefs;
