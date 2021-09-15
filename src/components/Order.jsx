import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { editArticle, deleteArticle } from '../JS/action/action';
import emailjs from 'emailjs-com'


const Order = props => {

    const canvas = useSelector(state => state.canvas)
    const dispatch = useDispatch()

    const [nbr, setNbr] = useState(canvas.map(e => e.Price))

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [adress, setAdress] = useState("")

    const totalPrice = nbr.reduce((total, value) => total + value)
    console.log('Test total Price:' + totalPrice)

    const responseOrder = {
        canvas: canvas,
        name: name,
        email: email,
        phone: phone,
        adress: adress,
        total: totalPrice,
    }

    const handleSubmit = e => {
        e.preventDefault();

        emailjs.sendForm('service_11144w5', 'template_icwnuoo', responseOrder, 'user_dw2se4CL4HZOhE87oiHc7')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Thank you for choosing us! You will receive an email.')
        }, function(error) {
            console.log('FAILED...', error);
            alert('An error has occured, please try again later.')
        });

        e.target.reset()
    }

    return (
        <div className="Order-Page">
            <div className="order">
                <div className="articles">
                    {canvas.map(e => {
                        <div className="card">
                            <div className="Numbers">
                                <button className="btn-increament" onClick={() => document.querySelector('input .nbr').target.value++}>+</button>
                                <input type="number" className="nbr" onChange={e => dispatch(editArticle(e.target.value))}/>
                                <button className="btn-decrement" onClick={() => document.querySelector('input .nbr').target.value--}>-</button>
                            </div>
                            <div className="SizeType">
                                <span className="size">{e.Height} x {e.Width}</span>
                                <small className="type">{e.type}</small>
                            </div>
                            <span className="price">{e.price}</span>
                            <i className="fas fa-trash-alt" onClick={dispatch(deleteArticle({ID: e.ID}))}/>
                        </div>
                    })}
                </div>
                <div className="info">
                    <form action="" id="infoForm">
                        <label htmlFor="name">
                            Name & First Name:
                            <input 
                            type="text" 
                            className="Contact_input" 
                            name="name" 
                            id="name"
                            onChange={e => setName(e.target.value)}/>
                        </label>
                        <label htmlFor="email">
                            Email:
                            <input 
                            type="email" 
                            className="Contact_input" 
                            name="email" 
                            id="email"
                            onChange={e => setEmail(e.target.value)}/>
                        </label>
                        <label htmlFor="phone">
                            Phone:
                            <input 
                            type="tel" 
                            className="Contact_input" 
                            name="phone" 
                            id="phone"
                            onChange={e => setPhone(e.target.value)}/>
                        </label>
                        <label htmlFor="adress">
                            Adress:
                            <input 
                            type="text" 
                            className="Contact_input" 
                            name="adress" 
                            id="adress"
                            onChange={e => setAdress(e.target.value)}/>
                        </label>
                        <div className="orderPrice">
                        <input 
                        type="text" 
                        value={totalPrice} 
                        className="Contact_btn totalPrice"
                        id="totalPrice"
                        readOnly/>
                        <input 
                        type="submit" 
                        value="Order" 
                        className="Contact_btn"
                        id="submit"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Order