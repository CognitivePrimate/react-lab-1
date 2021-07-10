import {useState} from "react";
import "./votes-styles.css";



function Votes() {
    // const [hidden, setHidden] = useState(true);
    // let AddClass = "";
    // if (hidden){
    //     AddClass = "Display";
    // }


    return(

        
        <div className="VotesContainer">
            <h3 className="VoteHead">Vote Here</h3>
            <div className="VotesButtonsContainer">
                <button className="VoteButtons Tuna" onClick={() => {}}>Tuna</button>
                <button className="VoteButtons Cheese" onClick={() => {}}>Cheese</button>
                <button  className="VoteButtons Catnip"onClick={() => {}}>Catnip</button>
            </div>

            <div className="VoteBarsContainer">
                <div className="TunaVotesBar Tuna"></div>
                <div className="CheeseVotesBar Cheese"></div>
                <div className="CatnipVotesBar Catnip"></div>
            </div>
        </div>
    );
}

export default Votes;

// vote block = "something"
// onclick block += "something"