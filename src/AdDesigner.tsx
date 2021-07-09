import "./adDesigner.css";
import {useState} from "react";



function AdDesigner(){
    const [flavor, setFlavor] = useState("Vanilla");


    return(
        <h2 className="AdDesigner">Ad Designer</h2>
    )

}


export default AdDesigner;