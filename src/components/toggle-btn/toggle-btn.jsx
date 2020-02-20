import React from 'react';
import './toggle-btn.scss';


const ToggleBtn = (props) => (
    <React.Fragment>
    <input
    className="react-switch-checkbox"
    id={`react-switch-new`}
    {...props}
    type="checkbox"
  />
  <label
    className="react-switch-label"
    htmlFor={`react-switch-new`}
  >
    <span className={`react-switch-button`} />
    </label>
    </React.Fragment>
)

export default ToggleBtn;