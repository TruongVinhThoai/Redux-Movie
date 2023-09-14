import { combineReducers } from "redux";
import { MovieReducer } from "./MovieReducer";

export let rootMovieReducer = combineReducers({ MovieReducer: MovieReducer });
