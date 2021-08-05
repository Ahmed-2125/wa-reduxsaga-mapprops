import {useEffect} from "react";
import axios from "axios";
import store from "../store/store";


// useEffect(() => {
//     axios
//       .get("https://mocki.io/v1/5e13f080-16e5-4e6a-a08e-cf5ba1f2753d")
//       .then((response: any) => {
//         store.dispatch({
//           type: "CREATE_THE_CHAT",
//           data: response.data,
//         });
//         console.log("checking the state", response.data);
//       })
//       .catch((error: any) => {
//         store.dispatch({ type: "FAIL" });
//       }); 
      
//   });