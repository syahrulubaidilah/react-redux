import hooks from 'feathers-hooks-common';
import auth from 'feathers-authentication';
import { required } from 'utils/validation';
import { validateHook as validate } from 'hooks';
import uuid from 'uuid';
import dashify from 'dashify';

const schemaValidator = {
  name: [required],
  type: [required],
  isbn: [required],
  start_date: [required],
  end_date: [required],
  description: [required],
  member: [required]
};

const options = {
  service: 'librarys',
  field: 'sentBy'
};

const librarysHooks = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      validate(schemaValidator),
      hook => {
        hook.data = {
          _id: uuid.v4(),
          name: hook.data.name,
          slug: dashify(hook.data.name),
          type: hook.data.type,
          isbn: hook.data.isbn,
          start_date: hook.data.start_date,
          end_date: hook.data.end_date,
          description: hook.data.description,
          member: hook.data.member
        };
      },
      hook => {
        hook.data.createdAt = new Date();
      }
    ],
    update: [
      validate(schemaValidator),
      hook => {
        hook.data = {
          name: hook.data.name,
          type: hook.data.type,
          isbn: hook.data.isbn,
          slug: dashify(hook.data.name),
          start_date: hook.data.start_date,
          end_date: hook.data.end_date,
          description: hook.data.description,
          member: hook.data.member
        };
      },
      hook => {
        hook.data.updatedAt = new Date();
      }
    ],
    patch: [],
    remove: []
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};

export default librarysHooks;
