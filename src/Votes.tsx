import {useState} from "react";
import "./votes-styles.css";

interface Props {
    selected: boolean;
    numberOfVotes: number;
    // percent: number;
}

// let TunaVotes: number = 0;
// let voteGrower = ({width, selected}: Props)  => {
//     let grow = selected ? {style: {width: +1}}
// } 


function Votes({selected, numberOfVotes}: Props) {
    const[width, setWidth] = useState(0);
    // const [percent, setPercent] = useState(0);
    // const [hidden, setHidden] = useState(true);
    // let AddClass = "";
    // if (hidden){
    //     AddClass = "Display";
    // }

    // percent function and variables
    // TODO
    // On button click, increase numberOfVotes
    // in one function:
    // increase totalVotes
    // increase flavorVote
    // increase increase percent
    // increase width based on percent

    // TODO END

    const allTheThings = (): any => {};
      
    let TunaVotes: number = 0;
    let totalVotes: number = 0;
    // let percent: number = (flavorVote: number): Number => {return Number((numberOfVotes/ totalVotes) * 100)};


    return(

        
        <div className="VotesContainer">
            <h3 className="VoteHead">Vote Here</h3>
            <div className="VotesButtonsContainer">
                <button className="VoteButtons Tuna" onClick={() => {setWidth(width + 1)}}>Tuna</button>
                <button className="VoteButtons Cheese" onClick={() => {}}>Cheese</button>
                <button  className="VoteButtons Catnip"onClick={() => {}}>Catnip</button>
            </div>

            <div className="VoteBarsContainer">
                <div className="TunaVotesBar Tuna" style={{width}}>"asdf"</div>
                <div className="CheeseVotesBar Cheese"></div>
                <div className="CatnipVotesBar Catnip"></div>
            </div>
        </div>
    );
}

export default Votes;

// vote block = "something"
// onclick block += "something"