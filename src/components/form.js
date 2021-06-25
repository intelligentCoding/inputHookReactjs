import useInputHook from "../hooks/use-inputHook";
const Form = (props) => {
  const {
    value: name,
    isValueValid: isNameValid,
    hasError: nameHasError,
    inputValueChanged: nameValueChanged,
    inputFocused: nameFieldIsFocused,
    resetField: resetNameField,
  } = useInputHook((value) => value.trim() !== "");
  const {
    value: email,
    isValueValid: isEmailValid,
    hasError: EmailHasError,
    inputValueChanged: emailValueChanged,
    inputFocused: emailFieldIsFocused,
    resetField: resetEmailField,
  } = useInputHook((value) => value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/));

  //we need to keep the submit button disable so we need to have the follwoing const
  let isFormValid = false; // by default the button will be disable
  if(name && email){
      isFormValid = true;
  }

  const formHandler = (event) => {
    event.preventDefault();
    //after form submitted reset it
    resetNameField();
    resetEmailField();
  };

  const emailClass = EmailHasError ? 'invalid' : '';
  const nameClass = nameHasError ? 'invalid' : '';
  return (
    <form className="form-css" onSubmit={formHandler}>
      <div className={nameClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameValueChanged}
          onBlur={nameFieldIsFocused}
          value={name}
        />
        {nameHasError && <p className="error-text">Name must not be empty!</p>}
      </div>
      <div className={emailClass}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailValueChanged}
          onBlur={emailFieldIsFocused}
          value={email}
        />
        {EmailHasError && <p className="error-text">Must Enter a valid email!</p>}
      </div>
      <div>
        <button disabled={!isFormValid} className="button">Submit</button>
      </div>
    </form>
  );
};

export default Form;
