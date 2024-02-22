import { combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist'
import loginReducer from './reducers/post.reducer'
import userReducer from "./reducers/user.reducer"


const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const reducer = combineReducers({
    userReducer,
    loginReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer )

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: true,
  })