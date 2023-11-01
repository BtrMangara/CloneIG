import { combineReducers } from "redux";
import PostsReducers from "./posts/PostReducers";
import UserReducers from "./posts/userReducers";

export default combineReducers({
    PostsReducers, UserReducers
})
