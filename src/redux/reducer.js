import { ADD_ADMIN, ADD_DESIGNATION, Add_USER, DELETE_ADMIN, DELETE_DESIGNATION, DELETE_USER, GET_ADMIN, GET_DESIGNATION, GET_USERS } from "./actionType";

const initState = {
    department: [],
    designation: [],
    admin : [],
    loading: true
}

const usersReducers = (state = initState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                department: action.payload,
                loading: false
            }
        case Add_USER:
            return {
                ...state,
                loading: false
            }
        case DELETE_USER:
            return {
                ...state,
                loading: false
            }
        case GET_DESIGNATION:
            return {
                ...state,
                designation: action.payload,
                loading: false
            }
        case ADD_DESIGNATION:
            return {
                ...state,
                loading: false
            }
            case DELETE_DESIGNATION:
            return {
                ...state,
                loading: false
            }
        case GET_ADMIN:
            return {
                ...state,
                admin: action.payload,
                loading: false
            }
        case ADD_ADMIN:
            return {
                ...state,
                loading: false
            }
            case DELETE_ADMIN:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export default usersReducers;
