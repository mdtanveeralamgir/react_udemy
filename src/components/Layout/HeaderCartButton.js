import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);

  //Reduce an array to a single number
  //Initially the curNumber is 0 as passed to the second argu
  // Then each item's amount will be added to the curNumber
  const numberOfCartItems = ctx.items.reduce((curNumber, item)=>{
    return curNumber + item.amount;
  }, 0);


  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;