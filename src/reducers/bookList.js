import {
  GET_BOOK_LIST_START,
  GET_BOOK_LIST_SUCCESS,
  GET_BOOK_LIST_FAILURE
} from "../actions/getBookList";

const initialState = {
  loading: "init",
  bookListArray: []
};

export default function getBookList(state = initialState, action) {
  // const bookListArray = state.bookListArray;
  console.log("reducer", state, action);
  console.log("action type: ", action.type);
  switch (action.type) {
    case GET_BOOK_LIST_START: {
      return { loading: "init" };
    }
    case GET_BOOK_LIST_SUCCESS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case GET_BOOK_LIST_FAILURE: {
      return {
        ...state,
        loading: "failed"
      };
    }
    default:
      return state;
  }
}
