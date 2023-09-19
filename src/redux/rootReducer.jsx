import { combineReducers } from "@reduxjs/toolkit";
import job from "./job";
import answer from "./answer";
import question from "./question";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "root",
    storage: storage, 
};

const rootReducer = combineReducers({
    job: job,
    answer: answer,
    question: question
});

export default persistReducer(persistConfig, rootReducer);