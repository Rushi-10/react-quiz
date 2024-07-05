export default function StartScreen({numQuestions,dispatch}){
    return(
        <div className="start">
        <h2>Welocome to react quiz</h2>
        <h3>{numQuestions} questons to test your react mastery</h3>
        <button className="btn btn-ui" onClick={()=>dispatch({type:"start"})}>Let's Start</button>
        </div>
    );
}