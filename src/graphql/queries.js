/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listCommentsByTalkId = /* GraphQL */ `
  query ListCommentsByTalkId($talkId: ID!) {
    listCommentsByTalkId(talkId: $talkId) {
      items {
        id
        talkId
        talk {
          id
          name
          speakerName
          speakerBio
          time
          timeStamp
          date
          location
          summary
          twitter
          github
          speakerAvatar
          createdAt
          updatedAt
        }
        message
        createdAt
        createdBy
        deviceId
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTalk = /* GraphQL */ `
  query GetTalk($id: ID!) {
    getTalk(id: $id) {
      id
      name
      speakerName
      speakerBio
      time
      timeStamp
      date
      location
      summary
      twitter
      github
      speakerAvatar
      comments {
        items {
          id
          talkId
          message
          createdAt
          createdBy
          deviceId
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTalks = /* GraphQL */ `
  query ListTalks(
    $filter: ModelTalkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTalks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        speakerName
        speakerBio
        time
        timeStamp
        date
        location
        summary
        twitter
        github
        speakerAvatar
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      talkId
      talk {
        id
        name
        speakerName
        speakerBio
        time
        timeStamp
        date
        location
        summary
        twitter
        github
        speakerAvatar
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      message
      createdAt
      createdBy
      deviceId
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        talkId
        talk {
          id
          name
          speakerName
          speakerBio
          time
          timeStamp
          date
          location
          summary
          twitter
          github
          speakerAvatar
          createdAt
          updatedAt
        }
        message
        createdAt
        createdBy
        deviceId
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReport = /* GraphQL */ `
  query GetReport($id: ID!) {
    getReport(id: $id) {
      id
      commentId
      comment
      talkTitle
      deviceId
      createdAt
      updatedAt
    }
  }
`;
export const listReports = /* GraphQL */ `
  query ListReports(
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        commentId
        comment
        talkTitle
        deviceId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
