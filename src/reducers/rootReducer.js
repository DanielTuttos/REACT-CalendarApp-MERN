import { combineReducers } from "redux";
import { iuReducer } from "./uiReducer";
import { calendarReducer } from "./calendarReducer";

export const rootReducer = combineReducers({
    ui: iuReducer,
    // TODO: AuthReducer
    calendar: calendarReducer
})