import {combineReducers} from "redux"
import usersReducers from "./reducer";

const rootReducer = combineReducers({
    department : usersReducers
})

export default rootReducer;