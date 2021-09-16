import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addArticle } from '../JS/action/action'
import dataAPI from "./canvas"


const Create_Page = props => {

    const dispatch = useDispatch()

    const [height, setHeight] = useState()
    const [width, setWidth] = useState()
    const [type, setType] = useState()
    const [price, setPrice] = useState()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(addArticle({
            ID: props.canvas.length,
            Height: height,
            Width: width,
            Type: type,
            Nbr: 1,
            Price: price
        }))
    }

    const dataCanvas = dataAPI.canvas.find(canvas => canvas.height.includes(height) || canvas.width.includes(width))

    return(

        <div className="Create-Page">

            <div className="Create-p-left">
                <h1 className="Create-p_h1">Start Creating!</h1>
                <form className="Create-p_form" onSubmit={handleSubmit}>
                    <div className="form_div">
                        <div className="theSizes">
                            <div className="div_input">
                                <label htmlFor="height" className="form_label">
                                    Height:
                                    <input 
                                    type="text" 
                                    className="form_input" 
                                    name="width" 
                                    id="width"
                                    value={height}
                                    onChange={e => setHeight(e.target.value)}/>
                                </label>
                                <label htmlFor="width" className="form_label">
                                    Width:
                                    <input 
                                    type="text" 
                                    className="form_input" 
                                    name="width" 
                                    id="width"
                                    value={width}
                                    onChange={e => setWidth(e.target.value)}/>
                                </label>
                            </div> 
                            (dataCanvas) ? (
                                <div className="filter">
                                    <span className="HxW" onClick={e => {
                                        setHeight(e.target.value);
                                        setWidth(e.target.value)
                                    }}> {dataCanvas.height} x {dataCanvas.width} </span>
                                </div>
                            ) : ()
                        </div>
                        <div className="div_input">
                            <label htmlFor="type" className="form_label">
                                Type:
                                <select name="type" id="type" value={type} onChange={e => setType(e.target.value)}>
                                    <option value="coton" selected>Coton</option>
                                    <option value="linen">Linen</option>
                                    <option value="lurblap">Lurblap</option>
                                </select>
                            </label>
                            <label htmlFor="" className="form_label">
                                Price: 
                                <input 
                                type="text" 
                                className="form_input" 
                                name="price" 
                                id="price" 
                                readOnly
                                value={price}/>
                            </label>
                        </div>
                    </div>
                    <div className="form_div">
                        <input type="submit" value="Add"/>
                    </div>
                </form>
            </div>
            <div className="Create-p-right">
                <div className="video">
                    
                </div>
            </div>


        </div>

    )
}
export default Create_Page;