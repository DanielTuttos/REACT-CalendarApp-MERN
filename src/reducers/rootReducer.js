import { combineReducers } from "redux";
import { iuReducer } from "./uiReducer";
import { calendarReducer } from "./calendarReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
    ui: iuReducer,
    // TODO: AuthReducer
    calendar: calendarReducer,

    auth:authReducer
})