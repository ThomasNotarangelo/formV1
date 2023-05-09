const StepTwo = ({ name, email, password, setStep }) => {
  return (
    <div className="stepTwoContainer">
      <h2>Results</h2>
      <div className="box">
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <p>Password : {password}</p>
      </div>
      <button
        className="back-button"
        onClick={() => {
          setStep(1);
        }}
      >
        Edit your informations
      </button>
    </div>
  );
};
export default StepTwo;
