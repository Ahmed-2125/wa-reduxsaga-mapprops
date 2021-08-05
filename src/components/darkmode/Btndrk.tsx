import {useContext,useState}from "react";
import React from "react";
import ThemeContext,{themes} from "../themes/themes"



const Darkbtn : React.FC = ( ) => {

   
    const [darkr,setDarkr] = useState<any>(themes.dark);

    const changetheme=()=>darkr ===themes.dark ?
     setDarkr(themes.light): setDarkr(themes.dark);
  
    return (
        <ThemeContext.Provider value={darkr}>
     
          <div>
          
                 
          </div>
          </ThemeContext.Provider>
     
    );
};
 export default Darkbtn;