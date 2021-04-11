import './index.css';

const Case = ({ehr}) => (
    <>
        <h3>Please review this Case: </h3>
        <textarea readOnly className="ehr" value={ehr.description}/>
    </>
);

Case.defaultProps = {
	ehr: ""
};

export default Case;