import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    valueChangeHandler: firstNameCHangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    valueChangeHandler: lastNameCHangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    valueChangeHandler: emailCHangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  return (
    <form>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNameCHangeHandler}
            onBlur={firstNameBlurHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameValue}
            onChange={lastNameCHangeHandler}
            onBlur={lastNameBlurHandler}
          />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={emailCHangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
