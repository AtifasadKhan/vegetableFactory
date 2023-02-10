import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './RenderMealsListForm.module.css';

const RenderMealsListForm = (props) => {
  const [inputValid, setInputValid] = useState(true);

  const amountInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // after linking ref to Input.js now we use ref below
    // THE CURRENT INPUT VALUE IS AWAYS STRING!
    const countOfItem = amountInputRef.current.value;
    // string to number!
    const stringToNumCountOfItem = +countOfItem;

    // if no num entered or <1 or > 5 then stop SSUBMIT HANDLER WORK!
    if (
      countOfItem.trim().length === 0 ||
      stringToNumCountOfItem < 1 ||
      stringToNumCountOfItem > 5
    ) {
      setInputValid(false);
      return;
    }

    // props coming from RenderMealsListForm 
    // passing the enteredamount ie count to rendermealslist
    props.passingCountForAddToCart(stringToNumCountOfItem);
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input
        // sending this ref to input component its like a prop
        // or may be its a prop
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      {/* <br /> */}
      <button> + Add</button>
      {!inputValid && <p>Please enter within the range (1-5).</p>}
    </form>
  );
};

export default RenderMealsListForm;
