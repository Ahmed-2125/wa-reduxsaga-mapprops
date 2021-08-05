import { AnyAction } from "redux";


const initialState={

    chats:[]

};

export const ChatReducer=(state=initialState,action:AnyAction)=>
{

    switch (action.type)
{
    case "CREATE_THE_CHAT":
        
        return{
            ...state,chats:action.rdata
        };
    case "FAILER":
        return console.log("ERROR");


     default:
         return state;
    
}

};