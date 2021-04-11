import React from "react";
import './index.css';

function Conditions ({conditions, onSelect, selectedCode}) {
    const condStyle = (code) => ({backgroundColor: selectedCode === code && "grey" });
    
    return (
        <>
            <h3>Select Condition: </h3>
            <ul>
                {conditions.map(({code, description}, i) => (
                        <li key={code} onClick={() => onSelect(code)} style={condStyle(code)}>{ `${description} ( ${code} )` }</li>
                    )
                )}
            </ul>
        </>
    );
}

export default Conditions;