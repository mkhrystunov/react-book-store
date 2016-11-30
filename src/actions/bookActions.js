import Axios from 'axios';
import * as actionTypes from './actionTypes';

const apiBase = 'http://583ed5507cc1221200cf7128.mockapi.io';

export const fetchBookSuccess = (books) => {
  return {
    type: actionTypes.FETCH_BOOK_SUCCESS,
    books
  };
};

export const fetchBooks = () => {
  return (dispatch) => {
    return Axios.get(apiBase + '/book')
      .then(response => {
        dispatch(fetchBookSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createBook = (book) => {
  return (dispatch) => {
    return Axios.post(apiBase + '/book', book)
      .then(response => {
        dispatch(createBookSuccess(response.data));
      }).catch(error => {
        throw(error);
      });
  };
};

export const createBookSuccess = (book) => {
  return {
    type: actionTypes.CREATE_BOOK_SUCCESS,
    book
  };
};

export const fetchBookByIdSuccess = (book) => {
  return {
    type: actionTypes.FETCH_BOOK_BY_ID_SUCCESS,
    book
  };
};

export const fetchBookById = (bookId) => {
  return (dispatch) => {
    return Axios.get(apiBase + '/book/' + bookId)
      .then(response => {
        dispatch(fetchBookByIdSuccess(response.data));
      }).catch(error => {
        throw(error);
      });
  };
};

export const addToCartSuccess = (item) => {
  return {
    type: actionTypes.ADD_TO_CART_SUCCESS,
    item
  };
};

export const addToCart = (item) => {
  return (dispatch) => {
    return Axios.post(apiBase + '/cart', item)
      .then(response => {
        dispatch(addToCartSuccess(response.data));
      }).catch(error => {
        throw(error);
      });
  };
};

export const fetchCartSuccess = (items) => {
  return {
    type: actionTypes.FETCH_CART_SUCCESS,
    items
  };
};

export const fetchCart = () => {
  return (dispatch) => {
    return Axios.get(apiBase + '/cart')
      .then(response => {
        dispatch(fetchCartSuccess(response.data));
      }).catch(error => {
        throw(error);
      });
  };
};
