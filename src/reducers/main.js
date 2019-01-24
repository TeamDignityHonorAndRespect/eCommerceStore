import axios from "axios";

const initialState = {
    users: {}
}

const GET_USERS = "GET_USERS";

// ACTION CREATORS
export function getUsers() {
    const users = axios.get('/users').then(response => response)
    return {
        type: GET_USERS,
        payload: users
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return console.log(action.payload)

        default:
            return state;
    }
}

export default reducer