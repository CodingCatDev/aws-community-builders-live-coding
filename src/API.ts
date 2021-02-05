/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTalkInput = {
  id?: string | null,
  name: string,
  speakerName: string,
  speakerBio: string,
  time?: string | null,
  timeStamp?: string | null,
  date?: string | null,
  location?: string | null,
  summary: string,
  twitter?: string | null,
  github?: string | null,
  speakerAvatar?: string | null,
};

export type ModelTalkConditionInput = {
  name?: ModelStringInput | null,
  speakerName?: ModelStringInput | null,
  speakerBio?: ModelStringInput | null,
  time?: ModelStringInput | null,
  timeStamp?: ModelStringInput | null,
  date?: ModelStringInput | null,
  location?: ModelStringInput | null,
  summary?: ModelStringInput | null,
  twitter?: ModelStringInput | null,
  github?: ModelStringInput | null,
  speakerAvatar?: ModelStringInput | null,
  and?: Array< ModelTalkConditionInput | null > | null,
  or?: Array< ModelTalkConditionInput | null > | null,
  not?: ModelTalkConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateTalkInput = {
  id: string,
  name?: string | null,
  speakerName?: string | null,
  speakerBio?: string | null,
  time?: string | null,
  timeStamp?: string | null,
  date?: string | null,
  location?: string | null,
  summary?: string | null,
  twitter?: string | null,
  github?: string | null,
  speakerAvatar?: string | null,
};

export type DeleteTalkInput = {
  id?: string | null,
};

export type CreateCommentInput = {
  id?: string | null,
  talkId?: string | null,
  message?: string | null,
  createdAt?: string | null,
  createdBy?: string | null,
  deviceId?: string | null,
};

export type ModelCommentConditionInput = {
  talkId?: ModelIDInput | null,
  message?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdBy?: ModelStringInput | null,
  deviceId?: ModelIDInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCommentInput = {
  id: string,
  talkId?: string | null,
  message?: string | null,
  createdAt?: string | null,
  createdBy?: string | null,
  deviceId?: string | null,
};

export type DeleteCommentInput = {
  id?: string | null,
};

export type CreateReportInput = {
  id?: string | null,
  commentId: string,
  comment: string,
  talkTitle: string,
  deviceId?: string | null,
};

export type ModelReportConditionInput = {
  commentId?: ModelIDInput | null,
  comment?: ModelStringInput | null,
  talkTitle?: ModelStringInput | null,
  deviceId?: ModelIDInput | null,
  and?: Array< ModelReportConditionInput | null > | null,
  or?: Array< ModelReportConditionInput | null > | null,
  not?: ModelReportConditionInput | null,
};

export type UpdateReportInput = {
  id: string,
  commentId?: string | null,
  comment?: string | null,
  talkTitle?: string | null,
  deviceId?: string | null,
};

export type DeleteReportInput = {
  id?: string | null,
};

export type ModelTalkFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  speakerName?: ModelStringInput | null,
  speakerBio?: ModelStringInput | null,
  time?: ModelStringInput | null,
  timeStamp?: ModelStringInput | null,
  date?: ModelStringInput | null,
  location?: ModelStringInput | null,
  summary?: ModelStringInput | null,
  twitter?: ModelStringInput | null,
  github?: ModelStringInput | null,
  speakerAvatar?: ModelStringInput | null,
  and?: Array< ModelTalkFilterInput | null > | null,
  or?: Array< ModelTalkFilterInput | null > | null,
  not?: ModelTalkFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  talkId?: ModelIDInput | null,
  message?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdBy?: ModelStringInput | null,
  deviceId?: ModelIDInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelReportFilterInput = {
  id?: ModelIDInput | null,
  commentId?: ModelIDInput | null,
  comment?: ModelStringInput | null,
  talkTitle?: ModelStringInput | null,
  deviceId?: ModelIDInput | null,
  and?: Array< ModelReportFilterInput | null > | null,
  or?: Array< ModelReportFilterInput | null > | null,
  not?: ModelReportFilterInput | null,
};

export type CreateTalkMutationVariables = {
  input: CreateTalkInput,
  condition?: ModelTalkConditionInput | null,
};

export type CreateTalkMutation = {
  createTalk:  {
    __typename: "Talk",
    id: string,
    name: string,
    speakerName: string,
    speakerBio: string,
    time: string | null,
    timeStamp: string | null,
    date: string | null,
    location: string | null,
    summary: string,
    twitter: string | null,
    github: string | null,
    speakerAvatar: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        talkId: string | null,
        talk:  {
          __typename: "Talk",
          id: string,
          name: string,
          speakerName: string,
          speakerBio: string,
          time: string | null,
          timeStamp: string | null,
          date: string | null,
          location: string | null,
          summary: string,
          twitter: string | null,
          github: string | null,
          speakerAvatar: string | null,
          comments:  {
            __typename: "ModelCommentConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        message: string | null,
        createdAt: string | null,
        createdBy: string | null,
        deviceId: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTalkMutationVariables = {
  input: UpdateTalkInput,
  condition?: ModelTalkConditionInput | null,
};

export type UpdateTalkMutation = {
  updateTalk:  {
    __typename: "Talk",
    id: string,
    name: string,
    speakerName: string,
    speakerBio: string,
    time: string | null,
    timeStamp: string | null,
    date: string | null,
    location: string | null,
    summary: string,
    twitter: string | null,
    github: string | null,
    speakerAvatar: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        talkId: string | null,
        talk:  {
          __typename: "Talk",
          id: string,
          name: string,
          speakerName: string,
          speakerBio: string,
          time: string | null,
          timeStamp: string | null,
          date: string | null,
          location: string | null,
          summary: string,
          twitter: string | null,
          github: string | null,
          speakerAvatar: string | null,
          comments:  {
            __typename: "ModelCommentConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        message: string | null,
        createdAt: string | null,
        createdBy: string | null,
        deviceId: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTalkMutationVariables = {
  input: DeleteTalkInput,
  condition?: ModelTalkConditionInput | null,
};

export type DeleteTalkMutation = {
  deleteTalk:  {
    __typename: "Talk",
    id: string,
    name: string,
    speakerName: string,
    speakerBio: string,
    time: string | null,
    timeStamp: string | null,
    date: string | null,
    location: string | null,
    summary: string,
    twitter: string | null,
    github: string | null,
    speakerAvatar: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        talkId: string | null,
        talk:  {
          __typename: "Talk",
          id: string,
          name: string,
          speakerName: string,
          speakerBio: string,
          time: string | null,
          timeStamp: string | null,
          date: string | null,
          location: string | null,
          summary: string,
          twitter: string | null,
          github: string | null,
          speakerAvatar: string | null,
          comments:  {
            __typename: "ModelCommentConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        message: string | null,
        createdAt: string | null,
        createdBy: string | null,
        deviceId: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment:  {
    __typename: "Comment",
    id: string,
    talkId: string | null,
    talk:  {
      __typename: "Talk",
      id: string,
      name: string,
      speakerName: string,
      speakerBio: string,
      time: string | null,
      timeStamp: string | null,
      date: string | null,
      location: string | null,
      summary: string,
      twitter: string | null,
      github: string | null,
      speakerAvatar: string | null,
      comments:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          talkId: string | null,
          talk:  {
            __typename: "Talk",
            id: string,
            name: string,
            speakerName: string,
            speakerBio: string,
            time: string | null,
            timeStamp: string | null,
            date: string | null,
            location: string | null,
            summary: string,
            twitter: string | null,
            github: string | null,
            speakerAvatar: string | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          message: string | null,
          createdAt: string | null,
          createdBy: string | null,
          deviceId: string | null,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    message: string | null,
    createdAt: string | null,
    createdBy: string | null,
    deviceId: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment:  {
    __typename: "Comment",
    id: string,
    talkId: string | null,
    talk:  {
      __typename: "Talk",
      id: string,
      name: string,
      speakerName: string,
      speakerBio: string,
      time: string | null,
      timeStamp: string | null,
      date: string | null,
      location: string | null,
      summary: string,
      twitter: string | null,
      github: string | null,
      speakerAvatar: string | null,
      comments:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          talkId: string | null,
          talk:  {
            __typename: "Talk",
            id: string,
            name: string,
            speakerName: string,
            speakerBio: string,
            time: string | null,
            timeStamp: string | null,
            date: string | null,
            location: string | null,
            summary: string,
            twitter: string | null,
            github: string | null,
            speakerAvatar: string | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          message: string | null,
          createdAt: string | null,
          createdBy: string | null,
          deviceId: string | null,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    message: string | null,
    createdAt: string | null,
    createdBy: string | null,
    deviceId: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment:  {
    __typename: "Comment",
    id: string,
    talkId: string | null,
    talk:  {
      __typename: "Talk",
      id: string,
      name: string,
      speakerName: string,
      speakerBio: string,
      time: string | null,
      timeStamp: string | null,
      date: string | null,
      location: string | null,
      summary: string,
      twitter: string | null,
      github: string | null,
      speakerAvatar: string | null,
      comments:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          talkId: string | null,
          talk:  {
            __typename: "Talk",
            id: string,
            name: string,
            speakerName: string,
            speakerBio: string,
            time: string | null,
            timeStamp: string | null,
            date: string | null,
            location: string | null,
            summary: string,
            twitter: string | null,
            github: string | null,
            speakerAvatar: string | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          message: string | null,
          createdAt: string | null,
          createdBy: string | null,
          deviceId: string | null,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    message: string | null,
    createdAt: string | null,
    createdBy: string | null,
    deviceId: string | null,
    updatedAt: string,
  } | null,
};

export type CreateReportMutationVariables = {
  input: CreateReportInput,
  condition?: ModelReportConditionInput | null,
};

export type CreateReportMutation = {
  createReport:  {
    __typename: "Report",
    id: string,
    commentId: string,
    comment: string,
    talkTitle: string,
    deviceId: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReportMutationVariables = {
  input: UpdateReportInput,
  condition?: ModelReportConditionInput | null,
};

export type UpdateReportMutation = {
  updateReport:  {
    __typename: "Report",
    id: string,
    commentId: string,
    comment: string,
    talkTitle: string,
    deviceId: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReportMutationVariables = {
  input: DeleteReportInput,
  condition?: ModelReportConditionInput | null,
};

export type DeleteReportMutation = {
  deleteReport:  {
    __typename: "Report",
    id: string,
    commentId: string,
    comment: string,
    talkTitle: string,
    deviceId: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsByTalkIdQueryVariables = {
  talkId: string,
};

export type ListCommentsByTalkIdQuery = {
  listCommentsByTalkId:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      talkId: string | null,
      talk:  {
        __typename: "Talk",
        id: string,
        name: string,
        speakerName: string,
        speakerBio: string,
        time: string | null,
        timeStamp: string | null,
        date: string | null,
        location: string | null,
        summary: string,
        twitter: string | null,
        github: string | null,
        speakerAvatar: string | null,
        comments:  {
          __typename: "ModelCommentConnection",
          items:  Array< {
            __typename: "Comment",
            id: string,
            talkId: string | null,
            message: string | null,
            createdAt: string | null,
            createdBy: string | null,
            deviceId: string | null,
            updatedAt: string,
          } | null > | null,
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      message: string | null,
      createdAt: string | null,
      createdBy: string | null,
      deviceId: string | null,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTalkQueryVariables = {
  id: string,
};

export type GetTalkQuery = {
  getTalk:  {
    __typename: "Talk",
    id: string,
    name: string,
    speakerName: string,
    speakerBio: string,
    time: string | null,
    timeStamp: string | null,
    date: string | null,
    location: string | null,
    summary: string,
    twitter: string | null,
    github: string | null,
    speakerAvatar: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        talkId: string | null,
        talk:  {
          __typename: "Talk",
          id: string,
          name: string,
          speakerName: string,
          speakerBio: string,
          time: string | null,
          timeStamp: string | null,
          date: string | null,
          location: string | null,
          summary: string,
          twitter: string | null,
          github: string | null,
          speakerAvatar: string | null,
          comments:  {
            __typename: "ModelCommentConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        message: string | null,
        createdAt: string | null,
        createdBy: string | null,
        deviceId: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTalksQueryVariables = {
  filter?: ModelTalkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTalksQuery = {
  listTalks:  {
    __typename: "ModelTalkConnection",
    items:  Array< {
      __typename: "Talk",
      id: string,
      name: string,
      speakerName: string,
      speakerBio: string,
      time: string | null,
      timeStamp: string | null,
      date: string | null,
      location: string | null,
      summary: string,
      twitter: string | null,
      github: string | null,
      speakerAvatar: string | null,
      comments:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          talkId: string | null,
          talk:  {
            __typename: "Talk",
            id: string,
            name: string,
            speakerName: string,
            speakerBio: string,
            time: string | null,
            timeStamp: string | null,
            date: string | null,
            location: string | null,
            summary: string,
            twitter: string | null,
            github: string | null,
            speakerAvatar: string | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          message: string | null,
          createdAt: string | null,
          createdBy: string | null,
          deviceId: string | null,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment:  {
    __typename: "Comment",
    id: string,
    talkId: string | null,
    talk:  {
      __typename: "Talk",
      id: string,
      name: string,
      speakerName: string,
      speakerBio: string,
      time: string | null,
      timeStamp: string | null,
      date: string | null,
      location: string | null,
      summary: string,
      twitter: string | null,
      github: string | null,
      speakerAvatar: string | null,
      comments:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          talkId: string | null,
          talk:  {
            __typename: "Talk",
            id: string,
            name: string,
            speakerName: string,
            speakerBio: string,
            time: string | null,
            timeStamp: string | null,
            date: string | null,
            location: string | null,
            summary: string,
            twitter: string | null,
            github: string | null,
            speakerAvatar: string | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          message: string | null,
          createdAt: string | null,
          createdBy: string | null,
          deviceId: string | null,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    message: string | null,
    createdAt: string | null,
    createdBy: string | null,
    deviceId: string | null,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      talkId: string | null,
      talk:  {
        __typename: "Talk",
        id: string,
        name: string,
        speakerName: string,
        speakerBio: string,
        time: string | null,
        timeStamp: string | null,
        date: string | null,
        location: string | null,
        summary: string,
        twitter: string | null,
        github: string | null,
        speakerAvatar: string | null,
        comments:  {
          __typename: "ModelCommentConnection",
          items:  Array< {
            __typename: "Comment",
            id: string,
            talkId: string | null,
            message: string | null,
            createdAt: string | null,
            createdBy: string | null,
            deviceId: string | null,
            updatedAt: string,
          } | null > | null,
          nextToken: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      message: string | null,
      createdAt: string | null,
      createdBy: string | null,
      deviceId: string | null,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetReportQueryVariables = {
  id: string,
};

export type GetReportQuery = {
  getReport:  {
    __typename: "Report",
    id: string,
    commentId: string,
    comment: string,
    talkTitle: string,
    deviceId: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListReportsQueryVariables = {
  filter?: ModelReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReportsQuery = {
  listReports:  {
    __typename: "ModelReportConnection",
    items:  Array< {
      __typename: "Report",
      id: string,
      commentId: string,
      comment: string,
      talkTitle: string,
      deviceId: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateCommentWithIdSubscriptionVariables = {
  talkId: string,
};

export type OnCreateCommentWithIdSubscription = {
  onCreateCommentWithId:  {
    __typename: "Comment",
    id: string,
    talkId: string | null,
    talk:  {
      __typename: "Talk",
      id: string,
      name: string,
      speakerName: string,
      speakerBio: string,
      time: string | null,
      timeStamp: string | null,
      date: string | null,
      location: string | null,
      summary: string,
      twitter: string | null,
      github: string | null,
      speakerAvatar: string | null,
      comments:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          talkId: string | null,
          talk:  {
            __typename: "Talk",
            id: string,
            name: string,
            speakerName: string,
            speakerBio: string,
            time: string | null,
            timeStamp: string | null,
            date: string | null,
            location: string | null,
            summary: string,
            twitter: string | null,
            github: string | null,
            speakerAvatar: string | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          message: string | null,
          createdAt: string | null,
          createdBy: string | null,
          deviceId: string | null,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    message: string | null,
    createdAt: string | null,
    createdBy: string | null,
    deviceId: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateTalkSubscription = {
  onCreateTalk:  {
    __typename: "Talk",
    id: string,
    name: string,
    speakerName: string,
    speakerBio: string,
    time: string | null,
    timeStamp: string | null,
    date: string | null,
    location: string | null,
    summary: string,
    twitter: string | null,
    github: string | null,
    speakerAvatar: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        talkId: string | null,
        talk:  {
          __typename: "Talk",
          id: string,
          name: string,
          speakerName: string,
          speakerBio: string,
          time: string | null,
          timeStamp: string | null,
          date: string | null,
          location: string | null,
          summary: string,
          twitter: string | null,
          github: string | null,
          speakerAvatar: string | null,
          comments:  {
            __typename: "ModelCommentConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        message: string | null,
        createdAt: string | null,
        createdBy: string | null,
        deviceId: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTalkSubscription = {
  onUpdateTalk:  {
    __typename: "Talk",
    id: string,
    name: string,
    speakerName: string,
    speakerBio: string,
    time: string | null,
    timeStamp: string | null,
    date: string | null,
    location: string | null,
    summary: string,
    twitter: string | null,
    github: string | null,
    speakerAvatar: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        talkId: string | null,
        talk:  {
          __typename: "Talk",
          id: string,
          name: string,
          speakerName: string,
          speakerBio: string,
          time: string | null,
          timeStamp: string | null,
          date: string | null,
          location: string | null,
          summary: string,
          twitter: string | null,
          github: string | null,
          speakerAvatar: string | null,
          comments:  {
            __typename: "ModelCommentConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        message: string | null,
        createdAt: string | null,
        createdBy: string | null,
        deviceId: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTalkSubscription = {
  onDeleteTalk:  {
    __typename: "Talk",
    id: string,
    name: string,
    speakerName: string,
    speakerBio: string,
    time: string | null,
    timeStamp: string | null,
    date: string | null,
    location: string | null,
    summary: string,
    twitter: string | null,
    github: string | null,
    speakerAvatar: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        talkId: string | null,
        talk:  {
          __typename: "Talk",
          id: string,
          name: string,
          speakerName: string,
          speakerBio: string,
          time: string | null,
          timeStamp: string | null,
          date: string | null,
          location: string | null,
          summary: string,
          twitter: string | null,
          github: string | null,
          speakerAvatar: string | null,
          comments:  {
            __typename: "ModelCommentConnection",
            nextToken: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        message: string | null,
        createdAt: string | null,
        createdBy: string | null,
        deviceId: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment:  {
    __typename: "Comment",
    id: string,
    talkId: string | null,
    talk:  {
      __typename: "Talk",
      id: string,
      name: string,
      speakerName: string,
      speakerBio: string,
      time: string | null,
      timeStamp: string | null,
      date: string | null,
      location: string | null,
      summary: string,
      twitter: string | null,
      github: string | null,
      speakerAvatar: string | null,
      comments:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          talkId: string | null,
          talk:  {
            __typename: "Talk",
            id: string,
            name: string,
            speakerName: string,
            speakerBio: string,
            time: string | null,
            timeStamp: string | null,
            date: string | null,
            location: string | null,
            summary: string,
            twitter: string | null,
            github: string | null,
            speakerAvatar: string | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          message: string | null,
          createdAt: string | null,
          createdBy: string | null,
          deviceId: string | null,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    message: string | null,
    createdAt: string | null,
    createdBy: string | null,
    deviceId: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment:  {
    __typename: "Comment",
    id: string,
    talkId: string | null,
    talk:  {
      __typename: "Talk",
      id: string,
      name: string,
      speakerName: string,
      speakerBio: string,
      time: string | null,
      timeStamp: string | null,
      date: string | null,
      location: string | null,
      summary: string,
      twitter: string | null,
      github: string | null,
      speakerAvatar: string | null,
      comments:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          talkId: string | null,
          talk:  {
            __typename: "Talk",
            id: string,
            name: string,
            speakerName: string,
            speakerBio: string,
            time: string | null,
            timeStamp: string | null,
            date: string | null,
            location: string | null,
            summary: string,
            twitter: string | null,
            github: string | null,
            speakerAvatar: string | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          message: string | null,
          createdAt: string | null,
          createdBy: string | null,
          deviceId: string | null,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    message: string | null,
    createdAt: string | null,
    createdBy: string | null,
    deviceId: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment:  {
    __typename: "Comment",
    id: string,
    talkId: string | null,
    talk:  {
      __typename: "Talk",
      id: string,
      name: string,
      speakerName: string,
      speakerBio: string,
      time: string | null,
      timeStamp: string | null,
      date: string | null,
      location: string | null,
      summary: string,
      twitter: string | null,
      github: string | null,
      speakerAvatar: string | null,
      comments:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          talkId: string | null,
          talk:  {
            __typename: "Talk",
            id: string,
            name: string,
            speakerName: string,
            speakerBio: string,
            time: string | null,
            timeStamp: string | null,
            date: string | null,
            location: string | null,
            summary: string,
            twitter: string | null,
            github: string | null,
            speakerAvatar: string | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          message: string | null,
          createdAt: string | null,
          createdBy: string | null,
          deviceId: string | null,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    message: string | null,
    createdAt: string | null,
    createdBy: string | null,
    deviceId: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateReportSubscription = {
  onCreateReport:  {
    __typename: "Report",
    id: string,
    commentId: string,
    comment: string,
    talkTitle: string,
    deviceId: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReportSubscription = {
  onUpdateReport:  {
    __typename: "Report",
    id: string,
    commentId: string,
    comment: string,
    talkTitle: string,
    deviceId: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReportSubscription = {
  onDeleteReport:  {
    __typename: "Report",
    id: string,
    commentId: string,
    comment: string,
    talkTitle: string,
    deviceId: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
