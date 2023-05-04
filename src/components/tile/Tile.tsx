import React, {useState} from 'react';
import "./Tile.css"

// Declaring type of props - see "Typing Component Props" for more examples
type AppProps = {
    value: any
  }; /* use `interface` if exporting so that consumers can extend */
  
  


  export default function Tile ({ value }: AppProps) {
    const [open,setOpen] = useState(false);

    return (
    <div className="Tile" onClick={()=> setOpen(!open)}>
        <div className={open? "PopUp": "Hidden"}>
        <img src={process.env.PUBLIC_URL + '/tiles/' + value + ".PNG"} />
        </div>
    </div>)
  } 
