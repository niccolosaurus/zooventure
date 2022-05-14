import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';



const AnimalList = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);


  useEffect(() => {
    async function getCart() {
      const animal = await idbPromise('aniamls', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...animal] });
    }

    if (!animal.cart.length) {
      getCart();
    }
  }, [state.animal.length, dispatch]);

  

  if (!state.list) {
    return (
      <div className="cart-closed" >
        <span role="img" aria-label="trash">
          🛒
        </span>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>
        [close]
      </div>
      <h2>Shopping Cart</h2>
      {state.animals.length ? (
        <div>
          {state.animals.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

        
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added any Animals!
        </h3>
      )}
    </div>
  );
};

export default AnimalList;
