import { Fragment } from 'react';
import classes from './Header.module.css';
import vegImg from '../../assets/veggies.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Vegetable Factory</h1>
        <HeaderCartButton khuljaSimSIm={props.khuljaSimSIm} />
      </header>
      <div className={classes['main-image']}>
        <img src={vegImg} alt='' srcset='' />
      </div>
    </Fragment>
  );
};

export default Header;
