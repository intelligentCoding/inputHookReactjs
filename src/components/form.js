
const Form = (props) => {
    return (
        <form className="form-css">
          <div className="">
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
            />
          </div>
          <div>
            <label htmlFor='email'>Your E-Mail</label>
            <input
              type='email'
              id='email'
            />
          </div>
          <div>
            <button className="button">Submit</button>
          </div>
        </form>
      );
    };

    export default Form;
    