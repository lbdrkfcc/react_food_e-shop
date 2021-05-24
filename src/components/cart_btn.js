import React, {useContext} from 'react'
import Context from '../context'

function CartBtn() {

  const {cart, openModal} = useContext(Context)

  return (
    <button type="button" className="btn text-dark bg-transparent" onClick={()=>{openModal()}}>
        <i className="material-icons">shopping_cart</i>
        {/* <span className="badge badge-success">{cart.length}</span> */}
        <span className="badge badge-success">{cart.length ? cart.reduce( (sum,item)=> sum + item.incart, 0 ) : '0'}</span>
    </button>
  );
}

export default CartBtn;