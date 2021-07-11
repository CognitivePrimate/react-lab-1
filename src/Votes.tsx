import {useState} from "react";
import "./votes-styles.css";

interface Props {
    // selected: boolean;
    // numberOfVotes: number;
    // percent: number;
}

// let TunaVotes: number = 0;
// let voteGrower = ({width, selected}: Props)  => {
//     let grow = selected ? {style: {width: +1}}
// } 


function Votes() {
    const[width, setWidth] = useState(0);
    const[flavor, setFlavor] = useState("Tuna");
    const[selected, setSelected] = useState(false);
    const[hasVotes, setHasVotes] = useState(false);
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
    // increase numberofVotes respective to flavor
    // increase increase percent
    // increase width based on percent

    // TODO END
    // NOTES
    // allTheThings calls percent, which gets passed numberofVotes for specific flavor
    // NOTES END
    // create conditional function for flavor votes
    let TotalVotes: number = 0;
    let NumberOfVotes: number = 0;
    let TunaVotes: number = 0;
    let CheeseVotes: number = 0;
    let CatnipVotes: number = 0;
    let Percent = 0;

    const AllTheThings = (): any => {
        TotalVotes++;
        // increase votes base on flavor
        flavor === "Tuna" ? TunaVotes = NumberOfVotes : flavor === "Cheese" ? NumberOfVotes = CheeseVotes : NumberOfVotes = CatnipVotes;
        NumberOfVotes++;
        console.log(`TotalVotes: ${TotalVotes}`);
        console.log(`NumberOfVotes: ${NumberOfVotes}`);
        console.log(`TunaVotes: ${TunaVotes}`);
        console.log(`CheeseVotes: ${CheeseVotes}`);
        console.log(`CatnipVotes: ${CatnipVotes}`);
        Percent = PercentCalculator(NumberOfVotes);
        console.log(`Percent: ${Percent}`);
        setWidth(Percent);
        setHasVotes(true);
    };
      
    
    
    let PercentCalculator = (NumberOfVotes: number): number => {return (NumberOfVotes/ TotalVotes) * 100};

    


    return(

        
        <div className="VotesContainer">
            <h3 className="VoteHead">Vote Here</h3>
            <div className="VotesButtonsContainer">
                <button className="VoteButtons Tuna" onClick={() => {setFlavor("Tuna"); AllTheThings()}}>Tuna</button>
                <button className="VoteButtons Cheese" onClick={() => {setFlavor("Cheese"); AllTheThings()}}>Cheese</button>
                <button  className="VoteButtons Catnip"onClick={() => {setFlavor("Catnip"); AllTheThings()}}>Catnip</button>
            </div>

            <div className="VoteBarsContainer">
                {hasVotes ? <p>{flavor}: {TunaVotes} ({Percent})</p> : null}
                <div className="TunaVotesBar Tuna" style={{width}}></div>
                {hasVotes ? <p>{flavor}: {CheeseVotes} ({Percent})</p> : null}
                <div className="CheeseVotesBar Cheese"></div>
                {hasVotes ? <p>{flavor}: {CatnipVotes} ({Percent})</p> : null}
                <div className="CatnipVotesBar Catnip"></div>
            </div>
        </div>
    );
}

export default Votes;