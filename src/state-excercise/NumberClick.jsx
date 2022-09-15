import { useState } from "react";
import "./NumberClick.scss";
function NumberClick() {
  const [number1, setNumber1] = useState(0);
  const AddNumber = () => {
    setNumber1(number1 + 1);
  };
  const LessNumber = () => {
    setNumber1(number1 - 1);
  };
  const ResetNumber = () => {
    setNumber1(0);
  };
  return (
    <div className="number-click">
      <div className="header">React Click</div>
      <div className="content">
        <div className="show-number">{number1}</div>
        <div className="change-number">
          <button className="btn btn-add" onClick={AddNumber}>
            +
          </button>
          <button className="btn btn-reset" onClick={ResetNumber}>
            Reset
          </button>
          <button className="btn btn-less" onClick={LessNumber}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default NumberClick;
