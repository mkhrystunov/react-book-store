import Axios from 'axios';

const apiUrl = 'http://583ed5507cc1221200cf7128.mockapi.io/book';

export const fetchBookSuccess = (books) => {
  return {
    type: 'FETCH_BOOK_SUCCESS',
    books
  };
};

export const fetchBooks = () => {
  return (dispatch) => {
    return Axios.get(apiUrl)
      .then(response => {
        dispatch(fetchBookSuccess(response.data))
      })
      .catch(error => {
        throw(error)
      });
  }
};

export const createBook = (book) => {
  return (dispatch) => {
    return Axios.post(apiUrl, book)
      .then(response => {
        dispatch(createBookSuccess(response.data))
      }).catch(error => {
        throw(error)
      });
  };
};

export const createBookSuccess = (book) => {
  return {
    type: 'CREATE_BOOK_SUCCESS',
    book
  };
};
