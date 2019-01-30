import axios from "axios";

const GET_USERS = "GET_USERS";
const GET_PRODUCTS = "GET_PRODUCTS";

// ACTION CREATORS
export function getUsers() {
    return {
        type: GET_USERS,
        // payload: axios.request('/users').then(response => response)
        payload: axios.get('/auth/me')
    }
};

export function getProducts(e) {
    return {
        type: GET_PRODUCTS,
        payload: e
    }
};

const initialState = {
    users: {
        id: null,
        email: null,
        name: null
    },
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case `${GET_USERS}_PENDING`:
            return Object.assign({}, state, { isLoading: true });

        case `${GET_USERS}_FULFILLED`:
            return Object.assign({}, state, {
                isLoading: false,
                users: action.payload,
            });
        case GET_PRODUCTS:
            return Object.assign({}, state, { products: action.payload });
        default:
            return state;
    }
}

export default reducer