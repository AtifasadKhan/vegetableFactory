import classes from './VeggiesSummary.module.css';

const VeggiesSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Fresh Veggies, Delivered To You</h2>
      <p>
        Choose your favorite Veggies from our broad selection of available
        Veggies and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our Veggies are high-quality and fresh produced by organic farming
        methods.
      </p>
    </section>
  );
};

export default VeggiesSummary;
