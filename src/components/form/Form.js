
import { useState } from "react";
import Popover from "../popover/Popover";
const Form = (prop) => {

  const [passValue, setPassValue] = useState("");

  const passOnChangeHandler = (event) => {
    setPassValue(event.target.value);
  };

  return (
    <div className="m-10">
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={passValue}
          onChange={passOnChangeHandler}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    <Popover passVal={passValue}/>
    </div>
  );
};

export default Form;
