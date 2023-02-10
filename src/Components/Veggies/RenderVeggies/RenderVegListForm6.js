import { useRef } from 'react';
import Input from '../../UI/Input';
import classes from './RenderVegListForm.module.css';

const RenderVegListForm = (props) => {
  const amountInputRef = useRef();
  const formSubmitHandler = (event) => {
    event.preventDefault();

    const countOfItem = amountInputRef.current.value;

    const stringToNumCountOfItem = +countOfItem;
    console.log(stringToNumCountOfItem);
    props.passingCountForAddToCart(stringToNumCountOfItem);
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input
        // sending this ref to input component its like a prop
        // or may be its a prop
        ref={amountInputRef}
        label='Count'
        input={{
          id: 'count_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      {/* <br /> */}
      <button> + Add</button>
    </form>
  );
};

export default RenderVegListForm;
