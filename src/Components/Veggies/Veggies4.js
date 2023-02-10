import { Fragment } from 'react';
import VeggiesDB from './VeggiesDB3';
import VeggiesSummary from './VeggiesSummary2';

const Veggies = (props) => {
  return (
    <Fragment>
      <VeggiesSummary />
      <VeggiesDB />
    </Fragment>
  );
};

export default Veggies;
