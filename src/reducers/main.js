import axios from "axios";

const GET_USER = "GET_USER";
const GET_PRODUCTS = "GET_PRODUCTS";

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

export function getProducts(e) {
    return {
        type: GET_PRODUCTS,
        payload: axios
        .get(`/api/products/${e}`)
        .then(response => {
          return response;
        })
        .catch(err => {
          return err
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
    isLoading: false
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
        case GET_PRODUCTS:
            return Object.assign({}, state, { products: action.payload });
        default:
            return state;
    }
}

export default reducer