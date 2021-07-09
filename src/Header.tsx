import "./header.css";

interface Props {
    headerText: string,
}

function Header({headerText}: Props){
    return(
        <header className="Header">
            <h1>{headerText}</h1>
        </header>
    )
}


export default Header;