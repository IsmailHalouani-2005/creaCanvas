import React from 'react';
import { Link } from 'react-router-dom'

const Create_Section = () => {
    return(

        <div className="Create-Section">

            <div className="Create_s-left">
                <h1 className="Create_s_h1">Start creating now!</h1>
                <p className="Create_s_p">"Creating is the key to Progression"</p>
            </div>
            <div className="Create_s-right">
                <button className="Create_s_btn">
                    <Link to='/Create'>Go!</Link>
                </button>
            </div>

        </div>

    )
}
export default Create_Section;