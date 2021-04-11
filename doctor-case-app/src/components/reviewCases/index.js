import React, {useState, useEffect} from "react";
import { getListOfCases } from "../../api/cases.js";
import { getListOfConditions } from "../../api/conditions.js";
import Case from '../../components/case/index.js';
import Conditions from '../../components/conditions/index.js';
import {submitCaseLabel} from '../../api/cases';
import './index.css';

const ReviewCases = ({user}) => {

  const [caseIndex, setCaseIndex] = useState(0);
  const [cases, setEHRCases] = useState([]);
  const [selectedCode, setSelected] = useState("");
  const [conditions, setConditions] = useState([]);

  useEffect(()=> {
     getListOfCases(user.token).then(arr => {
      setEHRCases(arr);
     });

     getListOfConditions(user.token).then(arr => {
       setConditions(arr);
     })
  }, [user.token]);

  const onConditionSelect = (condition) => {
    setSelected(condition);
  }

  const submitCondition = () => {
    submitCaseLabel(user.token, caseIndex, cases[caseIndex].description, selectedCode, user.user._id)
      .then(() => {
        setCaseIndex(caseIndex+1);
        setSelected('asdasd');
      })
      .catch(() => {
        alert("Error trying to login");
      });
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