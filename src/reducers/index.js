// redux
import {combineReducers} from "redux";
// reducers
import header from "./header";
import imageURL from "./imageURL";
import waitingText from "./buttonText";

export default combineReducers({header, imageURL, waitingText});
