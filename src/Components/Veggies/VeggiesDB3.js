// import bellpepper from '../../assets/bellpepper.jpg';
// import cabbage from '../../assets/cabbage.jpg';
// import tomato from '../../assets/tomato.jpg';
// import spinach from '../../assets/spinach.jpg';

import RenderVegList from './RenderVeggies/RenderVegList5';
import classes from './VeggiesDB.module.css';
import Card from '../UI/Card';
const DUMMY_VEGGIES = [
  {
    id: 'm1',
    name: 'Bell Pepper',
    description: 'Finest  and veggies',
    price: 22.99,
    // src: { bellpepper },
    src: './images/assets/bellpepper.jpg',
  },
  {
    id: 'm2',
    name: 'Cabbage',
    description: 'A german specialty!',
    price: 16.5,
    src: './images/assets/cabbage.jpg',
  },
  {
    id: 'm3',
    name: 'Tomatoes',
    description: 'American, raw, meaty',
    price: 12.99,
    src: './images/assets/tomato.jpg',
  },
  {
    id: 'm4',
    name: 'Spinach',
    description: 'Healthy...and green...',
    price: 18.99,
    src: './images/assets/spinach.jpg',
  },
];

const VeggiesDB = (props) => {
  const vegList = DUMMY_VEGGIES.map((item) => (
    <RenderVegList
      id={item.id}
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      img={item.src}
    />
  ));

  return (
    <section className={classes.meals}>
      {/* <Card mealsList={mealsList}></Card> */}
      <Card>
        <ul>{vegList}</ul>
      </Card>
    </section>
  );
};
export default VeggiesDB;
