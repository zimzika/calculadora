import React, { useState } from 'react';

import './App.css';

const App = () => {
    const [display, setDisplay] = useState("");

    let operators = ["*", "+", "-", "/"];

    const isOperator = (char) => operators.includes(char);
    const isNumber = (char) => !isNaN(parseInt(char));

    const handleClick = (e) => {
        let value = e.target.name;
        let lastChar = display.slice(-1);

        if (isOperator(value) && display.length <= 0) return;
        if (isOperator(value) && display.match(/([0-9]?(\+|\*|\+|\-)[0-9])/g)) {
            let result = eval(display);
            return setDisplay(result.concat(value));
        }
        if (isOperator(value) && !isNumber(lastChar)) return;
        
        setDisplay(display.concat(value));
    }

    const clear = () => {
        setDisplay("");
    }

    const backspace = () => {
        setDisplay(display.toString().slice(0, -1));
    }

    const result = () => {
        let result = eval(display);
        setDisplay(result.toString());
    }

    return (
        <>
            <div className="container">
                <form>
                    <input type="text" value={display} />
                </form>
                <div className="keypad">
                    {/* keypads from calculator */}
                    <button className="highlight"onClick={clear} id="clear">Clear</button>
                    <button className="highlight" onClick={backspace} id="backspace">C</button>
                    <button className="highlight" name="/" onClick={handleClick}>&divide;</button>
                    <button name="7" onClick={handleClick}>7</button>
                    <button name="8" onClick={handleClick}>8</button>
                    <button name="9" onClick={handleClick}>9</button>
                    <button className="highlight" name="*" onClick={handleClick}>&times;</button>
                    <button name="4" onClick={handleClick}>4</button>
                    <button name="5" onClick={handleClick}>5</button>
                    <button name="6" onClick={handleClick}>6</button>
                    <button className="highlight" name="-" onClick={handleClick}>&ndash;</button>
                    <button name="1" onClick={handleClick}>1</button>
                    <button name="2" onClick={handleClick}>2</button>
                    <button name="3" onClick={handleClick}>3</button>
                    <button className="highlight" name="+" onClick={handleClick}>+</button>
                    <button name="0" onClick={handleClick}>0</button>
                    <button name="." onClick={handleClick}>.</button>
                    <button className="highlight" onClick={result} id="result">=</button>
                </div>
            </div>
        </>
    )
}

export default App;