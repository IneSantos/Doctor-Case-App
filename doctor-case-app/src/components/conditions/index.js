import React from "react";
import './index.css';

const conditions = [{code:'F411', description: 'Generalized anxiety disorder' }];

function Conditions () {
    const selectCondition = () => {
        console.log('selectCondition');
    }

    return (
        <>
            <h3>Select Condition: </h3>
            <ul>
                {conditions.map((cond, i) => (
                    <li key={cond.code} onClick={selectCondition}>{ `${cond.description} ( ${cond.code} )` }</li>
                ))}
            </ul>
        </>
    );
}

export default Conditions;