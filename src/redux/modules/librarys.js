/* eslint linebreak-style: ["error", "windows"]*/

const LOAD = 'redux-example/librarys/LOAD';
const LOAD_SUCCESS = 'redux-example/librarys/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/librarys/LOAD_FAIL';
const LOAD_DETAIL = 'redux-example/librarys/LOAD_DETAIL';
const LOAD_DETAIL_SUCCESS = 'redux-example/librarys/LOAD_DETAIL_SUCCESS';
const LOAD_DETAIL_FAIL = 'redux-example/librarys/LOAD_DETAIL_FAIL';
const EDIT_START = 'redux-example/librarys/EDIT_START';
const EDIT_STOP = 'redux-example/librarys/EDIT_STOP';
const SAVE_BLOG = 'redux-example/librarys/SAVE_BLOG';
const SAVE_BLOG_SUCCESS = 'redux-example/librarys/SAVE_BLOG_SUCCESS';
const SAVE_BLOG_FAIL = 'redux-example/librarys/SAVE_BLOG_FAIL';
const IS_SLUG_EXISTS = 'redux-example/librarys/IS_SLUG_EXISTS';
const IS_SLUG_EXISTS_SUCCESS = 'redux-example/librarys/IS_SLUG_EXISTS_SUCCESS';
const IS_SLUG_EXISTS_FAIL = 'redux-example/librarys/IS_SLUG_EXISTS_FAIL';
const LOAD_ONE = 'redux-example/librarys/LOAD_ONE';
const LOAD_ONE_SUCCESS = 'redux-example/librarys/LOAD_ONE_SUCCESS';
const LOAD_ONE_FAIL = 'redux-example/librarys/LOAD_ONE_FAIL';
const UPDATE_BLOG = 'redux-example/librarys/UPDATE_BLOG';
const UPDATE_BLOG_SUCCESS = 'redux-example/librarys/UPDATE_BLOG_SUCCESS';
const UPDATE_BLOG_FAIL = 'redux-example/librarys/UPDATE_BLOG_FAIL';

const initialState = {
  loaded: false,
  editing: {},
  detail: {},
  data: [],
  library: {},
  saveError: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result.data,
        error: null
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: typeof action.error === 'string' ? action.error : 'Error'
      };
    case LOAD_DETAIL:
      return {
        ...state,
        loading: true
      };
    case LOAD_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        detail: action.result,
        error: null
      };
    case LOAD_DETAIL_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        library: null,
        error: typeof action.error === 'string' ? action.error : 'Error'
      };
    case LOAD_ONE:
      return {
        ...state,
        loading: true
      };
    case LOAD_ONE_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        library: action.result,
        error: null
      };
    case LOAD_ONE_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        library: null,
        error: typeof action.error === 'string' ? action.error : 'Error'
      };
    case EDIT_START:
      return {
        ...state,
        editing: {
          ...state.editing,
          [action.id]: true
        }
      };
    case EDIT_STOP:
      return {
        ...state,
        editing: {
          ...state.editing,
          [action.id]: false
        }
      };
    case SAVE_BLOG:
      return state;
    case SAVE_BLOG_SUCCESS:
      return {
        ...state,
        data: action.result
      };
    case SAVE_BLOG_FAIL:
      return typeof action.error === 'string' ? {
        ...state,
        saveError: {
          ...state.saveError,
          [action.id]: action.error
        }
      } : state;
    case UPDATE_BLOG:
      return state;
    case UPDATE_BLOG_SUCCESS:
      return {
        ...state,
        data: action.result
      };
    case UPDATE_BLOG_FAIL:
      return typeof action.error === 'string' ? {
        ...state,
        saveError: {
          ...state.saveError,
          [action.id]: action.error
        }
      } : state;
    case IS_SLUG_EXISTS:
      return {
        ...state,
        exist: true
      };
    case IS_SLUG_EXISTS_SUCCESS:
      return {
        ...state,
        slug: action.result.data,
        error: null
      };
    case IS_SLUG_EXISTS_FAIL:
      return {
        ...state,
        slug: null,
        error: typeof action.error === 'string' ? action.error : 'Error'
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.librarys && globalState.librarys.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get('/librarys?&$sort[createdAt]=-1')
  };
}

export function loadDetail(slug) {
  return {
    types: [LOAD_DETAIL, LOAD_DETAIL_SUCCESS, LOAD_DETAIL_FAIL],
    promise: client => client.get(`/library/${slug}`)
  };
}

export function loadOne(_id) {
  return {
    types: [LOAD_ONE, LOAD_ONE_SUCCESS, LOAD_ONE_FAIL],
    promise: client => client.get(`/librarys/${_id}`)
  };
}

export function save(library) {
  return {
    types: [SAVE_BLOG, SAVE_BLOG_SUCCESS, SAVE_BLOG_FAIL],
    promise: client => client.post('/librarys', {
      data: library
    })
  };
}

export function update(library) {
  return {
    types: [UPDATE_BLOG, UPDATE_BLOG_SUCCESS, UPDATE_BLOG_FAIL],
    promise: client => client.patch(`/librarys/${library._id}`, {
      data: library
    })
  };
}

export function editStart(id) {
  return { type: EDIT_START, id };
}

export function editStop(id) {
  return { type: EDIT_STOP, id };
}

export function isSlugExists(slug) {
  return {
    types: [IS_SLUG_EXISTS, IS_SLUG_EXISTS_SUCCESS, IS_SLUG_EXISTS_FAIL],
    promise: client => client.get(`/library/${slug}`, {
      slug
    })
  };
}
