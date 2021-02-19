import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class ModelCommentConnection {
  readonly items?: (Comment | null)[];
  readonly nextToken?: string;
  constructor(init: ModelInit<ModelCommentConnection>);
}

export declare class Comment {
  readonly id: string;
  readonly talkId?: string;
  readonly talk?: Talk;
  readonly message?: string;
  readonly createdAt?: string;
  readonly createdBy?: string;
  readonly deviceId?: string;
  constructor(init: ModelInit<Comment>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

export declare class Talk {
  readonly id: string;
  readonly name: string;
  readonly speakerName: string;
  readonly speakerBio: string;
  readonly time?: string;
  readonly timeStamp?: string;
  readonly date?: string;
  readonly location?: string;
  readonly summary: string;
  readonly twitter?: string;
  readonly github?: string;
  readonly speakerAvatar?: string;
  readonly comments?: (Comment | null)[];
  constructor(init: ModelInit<Talk>);
  static copyOf(source: Talk, mutator: (draft: MutableModel<Talk>) => MutableModel<Talk> | void): Talk;
}

export declare class Report {
  readonly id: string;
  readonly commentId: string;
  readonly comment: string;
  readonly talkTitle: string;
  readonly deviceId?: string;
  constructor(init: ModelInit<Report>);
  static copyOf(source: Report, mutator: (draft: MutableModel<Report>) => MutableModel<Report> | void): Report;
}