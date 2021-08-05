import React, { useState ,useEffect} from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import ThemeContext,{themes} from "../src/components/themes/themes"
import axios from "axios";
import store from "./components/redux/store/store";
import * as actions from "../src/components/redux/types/Types"
import { useContext } from "react";
 
const App: React.FC = () => {
  const [roomId, setRoomId] = useState<number>(0);
 
 
    useEffect(() => {
    axios
      .get("https://mocki.io/v1/eef537b9-6b25-47c4-a4df-b73450048132")
      .then((response: any) => {
        store.dispatch({
          type: actions.CREATE_THE_CHAT,
          rdata: response.data,
        });
        console.log("checking the state", response.rdata);
      })
      .catch((error: any) => {
        store.dispatch({ type: actions.FAIL });


      }); 

     
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const stor=store.getState();
      console.log("store",stor)
    console.log("UPDATED STATE IN",stor);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
 
  const theme = useContext(ThemeContext);
  const [darkr,setDarkr] = useState<any>(themes.dark);

  const changetheme=()=>darkr ===themes.dark ?
   setDarkr(themes.light): setDarkr(themes.dark);

  return (
    <div className="app">
      
      
          <div className="app__body"   style={{ background: darkr.background, color: darkr.foreground }}>
          <button  onClick={changetheme} style={{ background: darkr.background, color: darkr.foreground }}>  
                  Dark Mode!  
                  </button>
         
        <Sidebar roomId={roomId} setRoomId={setRoomId}/>
        {roomId !== 0 && <Chat roomId={roomId} />}
      </div>
   

    </div>
  );
};

export default App;
