import React, {useState, useEffect} from "react";
import { getListOfCases } from "../../api/cases.js";
import { getListOfConditions } from "../../api/conditions.js";
import Case from '../../components/case/index.js';
import Conditions from '../../components/conditions/index.js';
import './index.css';

const ReviewCases = (user) => {

  const [caseIndex, setCaseIndex] = useState(0);
  const [cases, setEHRCases] = useState([]);
  const [selectedCode, setSelected] = useState("");
  const [conditions, setConditions] = useState([]);

  useEffect(()=> {
     getListOfCases().then(arr => {
      setEHRCases(arr);
     });

     getListOfConditions().then(arr => {
       setConditions(arr);
     })
  }, []);

  const onConditionSelect = (condition) => {
    setSelected(condition);
  }

  const submitCondition = () => {
    setCaseIndex(caseIndex+1);
    console.log("submitCondition", caseIndex);
  }

  return (
    <section className = "review-section">
      { caseIndex < cases.length ? 
      <>
       <div className="case"><Case ehr={cases[caseIndex]}/></div>
        <div className="list-conditions">
          <Conditions conditions={conditions} onSelect={onConditionSelect} selectedCode={selectedCode}/>
          <button onClick={submitCondition}>
            Next Case
          </button>
        </div>
      </>
      : <h1>You are Done</h1>
      }
    </section>
  )
};

export default ReviewCases;