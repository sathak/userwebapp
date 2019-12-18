import {
  FETCH_USER_SUCCESS,
  ADD_USER,
  UPDATE_USER,
  EDIT_USER,
  DELETE_USER,
} from '../actions/actionType';

const initialState = {
  users: [],
  error: null
}
export default function USERlist(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return Object.assign({}, state,
        {
          users: action.users
        }
      );


    case ADD_USER:
      return Object.assign({}, state,
        {
          users: Object.assign(state.users, action.user)
        }
      );
    // return {
    //   ...state,
    //   users: [...state.users, action.user]
    // };

    case EDIT_USER:
      return Object.assign({}, state,
        {
          user: action.user
        }
      );
    // return {
    //   ...state,
    //   user: action.user
    // };
    case UPDATE_USER:
      return Object.assign({}, state,
        {
          user: action.user
        }
      );
    // return {
    //   ...state,
    //   user: action.user
    // };

    case DELETE_USER:
      return Object.assign({}, state,
        {
          users: state.users.filter(user => user.userId !== action.userId)
        }
      );
    // return {
    //   ...state,
    //   users: state.users.filter(user => user.userId !== action.userId)
    // };

    default:
      return state;
  }
}
