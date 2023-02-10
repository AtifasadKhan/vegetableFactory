import React from 'react';
import classes from './Input.module.css';
// forwarding the input from rendermealslistform to INPUT
// props and ref came from rendermealslistform
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* ref was forwarded as for input we created INPUT component so  */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
