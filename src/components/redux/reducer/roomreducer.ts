import {AnyAction} from "redux";

const initialState={

    rooms:[]

};

export const RoomReducer=(state=initialState,action:AnyAction)=>
{

    switch (action.type)
{
    case "CREATE_THE_ROOM":
        //return console.log("fetch room data")
        return{
            ...state,rooms:action.roomfetch
        };

        case "FAILER":
        return console.log("ERROR")
      
     default:
         return state;
    
}

};

