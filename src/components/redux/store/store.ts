import { createStore, combineReducers } from "redux";
import {RoomReducer} from "../reducer/roomreducer"
import { ChatReducer } from "../reducer/chatreducer";

const reducer=combineReducers({
    room:RoomReducer,
    chat:ChatReducer,

})


const store = createStore(reducer);


export default store;