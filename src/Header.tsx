import "./header.css";

interface Props {
    headerText: string,
    user: string
}

function Header({headerText, user}: Props){
    return(
        <header className="HeadContainer">
            <h1>{headerText}</h1>
            <p className="PHead">Welcome, {user}</p>
        </header>
    )
}


export default Header;