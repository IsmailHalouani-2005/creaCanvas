import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return(

        <div className="Home-Page">

            <h1 className="Home_h1">Create your own Canvas with us!</h1>
            <p className="Home_p">It never been simple as before to customize and order your Canvas</p>
            <p className="Home_p">We will deliver your creating to your emplacements</p>
            <button className="Home_btn">
                <Link to='/Create'>Start now!</Link>
            </button>

        </div>

    )
}
export default Home;