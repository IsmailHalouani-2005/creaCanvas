import React from 'react';

const About = () => {
    return(

        <div className="About-Section">

            <div className="About-left">
                <h1 className="About_h1">Who are we?</h1>
                <div className="About-social">
                    <div className="About-logo">
                        <img src="" alt="Logo Aziz Art" className="About_img"/>
                        <div className="About_socials">
                            <a href="https://www.facebook.com/NewAzizArt/?t=index%20aziz%20art&u=https%3A%2F%2Fazizart.tn%2Ffr%2F" className="About_Link">
                                <img src="" alt="Facebook" className="About_fb"/>
                            </a>
                            <a href="https://www.instagram.com/new_aziz_art/?text=index+aziz+art&url=https%3A%2F%2Fazizart.tn%2Ffr%2F" className="About_Link">
                                <img src="" alt="Instagram" className="About_Inst"/>
                            </a>
                        </div>
                    </div>
                    <button className="About_btn">
                        <a href="https://azizart.tn/fr/" className="About_link">Visit</a>
                    </button>
                </div>
            </div>

            <div className="About-right">
                <p className="About_p">
                    This sub-company is created by Aziz Art, which is a fine art material store, selling high quality and professional products.
                <br/>
                    We build Canvas with 100% coton cloth, linen and lurblap.
                </p>
            </div>

        </div>

    )
}
export default About;