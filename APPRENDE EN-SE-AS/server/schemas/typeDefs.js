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
    video_url: String
    studentEnrolled: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    user(username: String!): User
    courses(username: String): [Course]
    course(courseId: ID!): Course
    me: User
}

type Mutation {
    addUser (username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCourse(title: String!, description: String!): Course

}


`;

module.exports = typeDefs;