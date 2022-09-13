import useInput from "../hooks//use-input";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((name) => name.trim("").length > 0);

  const {
    value: enteredLastname,
    isValid: lastnameIsValid,
    hasError: lastnameHasError,
    valueChangeHandler: lastnameChangeHandler,
    valueBlurHandler: lastnameBlurHandler,
    reset: resetLastname,
  } = useInput((name) => name.trim("").length > 0);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((email) => email.includes("@"));

  let formIsValid = false;
  if (nameIsValid && lastnameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHanlder = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetLastname();
    resetName();
    resetEmail();
  };

  const nameClassName = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const lastnameClassName = lastnameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClassName = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHanlder}>
      <div className="control-group">
        <div className={nameClassName}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameInputHasError && <p className="error-text">Name is required</p>}
        </div>

        <div className={lastnameClassName}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={enteredLastname}
            onChange={lastnameChangeHandler}
            onBlur={lastnameBlurHandler}
          />
          {lastnameHasError && (
            <p className="error-text">Last name is required</p>
          )}
        </div>
      </div>
      <div className={emailClassName}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && <p className="error-text">Email must be valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
