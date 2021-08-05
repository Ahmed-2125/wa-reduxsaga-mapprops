import {useEffect} from "react";
import axios from "axios";
import store from "../store/store";


useEffect(() => {
    axios
      .get("https://mocki.io/v1/eef537b9-6b25-47c4-a4df-b73450048132")
      .then((response: any) => {
        store.dispatch({
          type: "CREATE_THE_ROOM",
          roomdata: response.roomdata,
        });
        console.log("checking room state", response.roomdata);
      })
      .catch((error: any) => {
        store.dispatch({ type: "FAILER" });
      }); 
  });

 