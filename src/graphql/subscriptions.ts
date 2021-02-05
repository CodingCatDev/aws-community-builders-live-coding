/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCommentWithId = /* GraphQL */ `
  subscription OnCreateCommentWithId($talkId: ID!) {
    onCreateCommentWithId(talkId: $talkId) {
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
export const onCreateTalk = /* GraphQL */ `
  subscription OnCreateTalk {
    onCreateTalk {
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
export const onUpdateTalk = /* GraphQL */ `
  subscription OnUpdateTalk {
    onUpdateTalk {
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
export const onDeleteTalk = /* GraphQL */ `
  subscription OnDeleteTalk {
    onDeleteTalk {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateReport = /* GraphQL */ `
  subscription OnCreateReport {
    onCreateReport {
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
export const onUpdateReport = /* GraphQL */ `
  subscription OnUpdateReport {
    onUpdateReport {
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
export const onDeleteReport = /* GraphQL */ `
  subscription OnDeleteReport {
    onDeleteReport {
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
