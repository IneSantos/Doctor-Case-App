import React, {useState, useEffect} from "react";
import { getListOfCases } from "../../api/cases.js";
import Case from '../../components/case/index.js';
import Conditions from '../../components/conditions/index.js';
import './index.css';

const Home = () => {
  
  const [ehr, setEHRCase] = useState("");

  useEffect(()=> {
     getListOfCases().then(arr => {
      setEHRCase(arr[0]);
     });
  }, []);

  return (
    <section className = "review-section">
      <div className="case"><Case ehr={ehr}/></div>
      <div className="list-conditions"><Conditions/></div>
    </section>
  )
};

export default Home;