import axios from "axios";

export const GET_BOOK_LIST = "GET_BOOK_LIST";

function get() {
  return {
    type: "GET"
  };
}

const GET_BOOK_LIST_START = "GET_BOOK_LIST_START";
const GET_BOOK_LIST_SUCCESS = "GET_BOOK_LIST_SUCCESS";
const GET_BOOK_LIST_FAILURE = "GET_BOOK_LIST_FAILURE";

export { GET_BOOK_LIST_START, GET_BOOK_LIST_SUCCESS, GET_BOOK_LIST_FAILURE };

function bookList(actionType, bookListArray = {}) {
  return {
    type: actionType,
    payload: { bookListArray }
  };
}

export default function getBookList() {
  return dispatch => {
    dispatch(bookList(GET_BOOK_LIST_START));
    axios
      .get("https://reading-club-backend.herokuapp.com/book/1")
      .then(res => {
        dispatch(bookList(GET_BOOK_LIST_SUCCESS, str));
        var str = JSON.parse(res.data.message);
        console.log("------>", str);
      })
      .catch(error => {
        dispatch(bookList(GET_BOOK_LIST_FAILURE, error));
      });
  };
}
