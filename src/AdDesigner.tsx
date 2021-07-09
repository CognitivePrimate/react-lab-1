import "./adDesigner.css";
import {useState} from "react";

interface Props {
    flavor: string;
    fontSize: number;
    darkTheme: boolean;
}

function AdDesigner(){

    const [flavor, setFlavor] = useState("Catnip");
    const [darkTheme, setDark] = useState(false);
    const [fontSize, setFontSize] = useState(50);
    let AddClass = "";
    if (darkTheme){
        AddClass = "Dark";
    }

    return(
        <div className="AdDesignerContainer">
            <h2 className="AdDesignerHead">Ad Designer</h2>
            <div className={`VoteForContainer ${AddClass}`}>
                <p className="VoteFor">Vote for</p>
                <h3 className={`SupportedSelection ${AddClass}`} style={{fontSize}}>
                    {flavor}
                </h3>
            </div>

            <h3 className="WhatToSupport">What to Support</h3>
            <div className="SupportButtonsContainer">
                <button className="SupportButtons" onClick={() => {setFlavor("Tuna")}}>Tuna</button>
                <button className="SupportButtons" onClick={() => {setFlavor("Cheese")}}>Cheese</button>
                <button className="SupportButtons" onClick={() => {setFlavor("Chicken")}}>Chicken</button>
            </div>

            <h3 className="ColorTheme">Color Theme</h3>
            <div className="ColorThemeContainer">
                <button className="ThemeButtons" onClick={() => {setDark(false)}}>Light</button>
                <button className="ThemeButtons" onClick={() => {setDark(true)}}>Dark</button>
            </div>

            <h3 className="FontSize">Font Size</h3>
            <div className="FontSizeContainer">
                <button className="FontSizeButtons" onClick={() => {setFontSize(fontSize - 1)}}>Down</button>
                <span className="FontSizeDisplay">{fontSize}</span>
                <button className="FontSizeButtons" onClick={() => {setFontSize(fontSize + 1)}}>Up</button>
            </div>



        </div>
    )

}


export default AdDesigner;


