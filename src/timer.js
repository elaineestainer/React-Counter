import { useState } from "react";
import './timer.css';

function Timer ( ) {
    const [counter, setcounter] = useState(0);

    return(
        <span>
            <p className={counter > 0 ? "positive" : counter < 0 ? "negative" : null}>{counter}</p>
            <div className="button">
                <button onClick={() => setcounter(counter + 1)}>+ </button>
                <button onClick={() => setcounter(counter - 1)}>- </button>
            </div>
            
            
        </span>
    )
}

export default Timer;