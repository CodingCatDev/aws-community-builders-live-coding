/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTalk = /* GraphQL */ `
  mutation CreateTalk(
    $input: CreateTalkInput!
    $condition: ModelTalkConditionInput
  ) {
    createTalk(input: $input, condition: $condition) {
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
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTalk = /* GraphQL */ `
  mutation UpdateTalk(
    $input: UpdateTalkInput!
    $condition: ModelTalkConditionInput
  ) {
    updateTalk(input: $input, condition: $condition) {
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
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTalk = /* GraphQL */ `
  mutation DeleteTalk(
    $input: DeleteTalkInput!
    $condition: ModelTalkConditionInput
  ) {
    deleteTalk(input: $input, condition: $condition) {
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
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createReport = /* GraphQL */ `
  mutation CreateReport(
    $input: CreateReportInput!
    $condition: ModelReportConditionInput
  ) {
    createReport(input: $input, condition: $condition) {
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
export const updateReport = /* GraphQL */ `
  mutation UpdateReport(
    $input: UpdateReportInput!
    $condition: ModelReportConditionInput
  ) {
    updateReport(input: $input, condition: $condition) {
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
export const deleteReport = /* GraphQL */ `
  mutation DeleteReport(
    $input: DeleteReportInput!
    $condition: ModelReportConditionInput
  ) {
    deleteReport(input: $input, condition: $condition) {
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
