import './index.css';

const ehr = "The patient is a 32 year old female who presents to the Urgent Care complaining of sore throat that started 7 days ago. Developed into post nasal drip and then cough. No measured fevers. Had chills and body aches at the onset that resolved after the first day. A little facial headache with the congestion at times; better today. Some pressure on and off in the ears, no pain, hearing loss or tinnitus. Cough is mostly dry, sometimes productive of clear sputum. Denies shortness of breath. Never smoker. Has never needed inhalers. No history of pneumonia. Currently treating with ibuprofen which helps. Tried some over-the-counter Mucinex ES and vitamin C."

const Case = () => (
    <>
        <h3>Please review this Case: </h3>
        <textarea readOnly className="ehr" value={ehr}/>
    </>
  );

export default Case;