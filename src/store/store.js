import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { rootReducer } from './root-reducer';

const userInfoFromStorage = localStorage.getItem('userInfo') ?
JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage},
}

const middlewares = [thunk].filter(Boolean)


const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
    preloadedState: initialState
})

export default store;