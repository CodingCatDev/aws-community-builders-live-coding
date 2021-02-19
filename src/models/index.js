// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comment, Talk, Report, ModelCommentConnection } = initSchema(schema);

export {
  Comment,
  Talk,
  Report,
  ModelCommentConnection
};