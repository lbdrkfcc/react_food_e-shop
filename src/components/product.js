import React, {/*useState,*/ useContext} from 'react'
import Context from '../context'
import Count from './count'

function Product({prod}) {

  const {addToCart, removeFromCart} = useContext(Context)

  return (
    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 p-2">
        <div className="card">
            <img src="https://via.placeholder.com/640x240.png" className="card-img-top" alt="alt-img"/>
            <div className="card-body">

                <h5 className="card-title">{prod.title}</h5>
                <p className="card-text" dangerouslySetInnerHTML={{__html: prod.desc}}>
                    {/* {prod.desc} */}
                </p>

                <p><strong>{prod.price} &#8381;</strong></p>
                
                <div className="row">
                    <Count prodItem={prod}/>
                    {/* <div className="col">
                        <button 
                        className="btn btn-primary" 
                        onClick={e => {
                            e.preventDefault()
                            addToCart(prod)
                        }}
                        >Add to cart</button>
                    </div> */}
                    
                    {/* <div className="col-6">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <button 
                                className="btn btn-secondary" 
                                type="button"
                                onClick={e => {
                                    e.preventDefault()
                                    removeFromCart(prod.id)
                                }}
                                >-</button>
                            </div>
                            <input type="text" 
                            className="form-control text-center" 
                            placeholder="--" 
                            value={prod.incart || 0} 
                            readOnly
                            />
                            <div className="input-group-append">
                                <button 
                                className="btn btn-primary" 
                                type="button" 
                                onClick={e => {
                                    e.preventDefault()
                                    addToCart(prod)
                                }}
                                >+</button>
                            </div>
                        </div>
                    </div> */}
                </div>
                
            </div>
        </div>
    </div>
  );
}

export default Product;