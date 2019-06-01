import axios from "axios";

const GET_USER = "GET_USER";
const GET_PRODUCTS = "GET_PRODUCTS";
const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
const SET_PROD = "SET_PROD";
const SET_ALL_PROD = "SET_ALL_PROD";

// ACTION CREATORS
export function getUser() {
  return {
    type: GET_USER,
    payload: axios
      .get("/auth/me")
      .then(response => {
        return response.data[0];
      })
      .catch(err => {
        return
      })
  };
}

export function setProd(e) {
  return {
    type: SET_PROD,
    payload: e
  };
}

export function setAllProd(e) {
  return {
    type: SET_ALL_PROD,
    payload: e
  };
}

export function getProducts(param) {
  return {
    type: GET_PRODUCTS,
    payload: axios
      .get(`http://localhost:3001/user/${param}`)
      .then(response => {
        return response.data;
      })
  }
};

export function getAllProducts() {
  return {
    type: GET_ALL_PRODUCTS,
    payload: axios
      .get(`http://localhost:3001/allProducts`)
      .then(response => {
        return response.data;
      })
  }
};

const initialState = {
  users: {
    id: null,
    email: null,
    name: null
  },
  products: "",
  user: "",
  isLoading: false,
  didErr: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_USER}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `${GET_USER}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        user: action.payload,
      });
    // case `${GET_USER}_REJECTED`:
    //   return Object.assign({}, state, { isLoading: false, didErr: true });

    case `${GET_ALL_PRODUCTS}_FULFILLED`:
      return Object.assign({}, state, {
        products: action.payload,
        isLoading: false
      });

    case `${GET_PRODUCTS}_FULFILLED`:
      return Object.assign({}, state, {
        products: action.payload,
        isLoading: false
      });

    case SET_PROD:
      return Object.assign({}, state, { products: action.payload });

    case SET_ALL_PROD:
      return Object.assign({}, state, { all_products: action.payload });

    default:
      return state;
  }
}

export default reducer