import axios from "axios";

const GET_USERS = "GET_USERS";

// ACTION CREATORS
export function getUsers() {
    return {
        type: GET_USERS,
        payload: axios.request('/users').then(response => response)
    }
};

const initialState = {
    users: {},
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case `${GET_USERS}_PENDING`:
            return Object.assign({}, state, { isLoading: true });

        case `${GET_USERS}_FULFILLED`:
            return Object.assign({}, state, { users: action.payload });
        default:
            return state;
    }
}

export default reducer