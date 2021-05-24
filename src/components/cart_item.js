import React, {useContext} from 'react'
import Context from '../context'
import CountInput from './count_input'

function CartItem({cartitem, index}) {

  const {cart, removeFromCart} = useContext(Context)

  return (
    <div className="alert alert-light">
      <div className="row">
        <div className="col-9">
          <strong>{cartitem.title}</strong>  
          {cartitem.weight} {cartitem.measure}, 
          {cartitem.cal} kal. 
          <strong>{cartitem.price}&#8381;</strong>
          <i>x{cartitem.incart}</i>
        </div>
        <div className="col">
          <CountInput prdItem={cartitem}/>
        </div>
      </div>
         
        
        {/* <button type="button" className="close" onClick={()=>{removeFromCart(index)}}>
            <span aria-hidden="true">&times;</span>
        </button> */}
    </div>
  );
}

export default CartItem;