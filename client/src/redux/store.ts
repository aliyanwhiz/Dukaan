import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { rootReducer } from "./rootReducer";

const  finalState = combineReducers({
    rootReducer,
})

const initialState = {
    rootReducer: {
        cartItems : localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems") || '[]') : []
    }
}

const middleware = [thunk]

const store = configureStore({
    reducer: finalState,
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(middleware),
    preloadedState: {
        rootReducer: {
            ...initialState.rootReducer,
            loading: false
        }
    }
})

export default store