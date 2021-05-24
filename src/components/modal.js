import React, {useState,useEffect, useContext, Fragment} from 'react'
import Context from '../context'
import CartItem from './cart_item'

function Modal() {

    const {cart, closeModal} = useContext(Context)

    const [totalPrice, setTotalPrice] = useState(0)
    const [totalWeight, setTotalWeight] = useState(0)
    const [totalCal, setTotalCal] = useState(0)

    useEffect(()=>{
        setTotalPrice(cart.reduce((sum,prod)=>{ return sum+(prod.price*prod.incart)},0))
        setTotalWeight(cart.reduce((sum,prod)=>{ return sum+(prod.weight*prod.incart)},0))
        setTotalCal(cart.reduce((sum,prod)=>{ return sum+(prod.cal*prod.incart)},0))
    },[cart])
  
    return (
        <Fragment>
            <div className="modal" 
            onClick={e=>{
                if(e.target.classList.contains('modal')) closeModal()
            }}
            >
                <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">Korzina</h5>
                    <button type="button" className="close" onClick={()=>{closeModal()}}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div className="modal-body">
                    {cart.length ? (
                        cart.map((cartitem, index) =>{
                            return <CartItem cartitem={cartitem} index={index} key={index}/>
                        })
                    ) : (
                        <p>Wasza korzina pusta</p>
                    )}

                    <div className="alert alert-primary" role="alert">
                        Itogowaja cena: {totalPrice} &#8381; za {totalCal} kalorij w {totalWeight} grammah
                    </div>
                        
                    
                    </div>
                    <div className="modal-footer">
                        {/* <button type="button" className="btn btn-secondary" onClick={()=>{closeModal()}}>Zakrytj</button> */}
                        {cart.length ? (
                            <button type="button" className="btn btn-success">Oformitj zakaz</button>
                        ) : (
                            <button type="button" className="btn btn-success disabled" disabled>Oformitj zakaz</button>
                        )}
                        
                    </div>
                </div>
                </div>
            </div>
            <div className="modal-backdrop"></div>
        </Fragment>
    );
  }
  
  export default Modal;