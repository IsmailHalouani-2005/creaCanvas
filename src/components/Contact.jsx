import React, {useState, useRef} from 'react';
import emailjs from 'emailjs-com'
import './map.css';
// import { TileLayer } from 'react-leaflet'
// import { MapContainer } from 'react-leaflet'
import osm from './osm-provider'

const Contact = () => {

    const [center, setCenter] = useState({ lat: 10.332417, lng: 36.883167});
    const ZOOM_lvl = 9;

    const handleSubmit = e => {
        e.preventDefault();

        emailjs.sendForm('service_11144w5', 'template_ou124vh', e.target, 'user_dw2se4CL4HZOhE87oiHc7')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });

        e.target.reset()
    }

    // mapboxgl.setRTLTextPlugin('https://cdn.maptiler.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.1.2/mapbox-gl-rtl-text.js');
    // var map = new mapboxgl.Map({
    //     container: 'map', // container id
    //     style: 'https://api.maptiler.com/maps/streets/style.json?key=<Pd77Yn80vOUuXWwjDMQI>', // style URL
    //     center: [36.883167, 10.332417], // starting position [lng, lat]
    //     zoom: 9 // starting zoom
    // });

    const mapRef = useRef()

    return(

        <div className="Contact-Section">

            <div className="Contact-left">
                {/* <div id="map">
                    <MapContainer
                    center={center}
                    zoom={ZOOM_lvl}
                    ref={mapRef}
                    >
                        <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution}/>
                    </MapContainer>
                </div> */}
            </div>
            <div className="Contact-right">
                <h1 className="Contact_h1">Contact us!</h1>
                <form>
                    <label htmlFor="name">
                        Name & First Name:
                        <input 
                        type="text" 
                        className="Contact_input" 
                        name="name" 
                        id="name"/>
                    </label>
                    <label htmlFor="phone">
                        Phone:
                        <input 
                        type="phone" 
                        className="Contact_input" 
                        name="phone" 
                        id="phone"/>
                    </label>
                    <label htmlFor="email">
                        Email:
                        <input 
                        type="email" 
                        className="Contact_input" 
                        name="email" 
                        id="email"/>
                    </label>
                    <label htmlFor="msg">
                        Message:
                        <textarea 
                        cols="30" 
                        rows="20" 
                        type="text" 
                        className="Contact_input" 
                        name="msg" 
                        id="msg"/>
                    </label>
                    <input 
                    type="submit" 
                    value="Send" 
                    className="Contact_btn"
                    id="submit"/>
                </form>
            </div>

        </div>

    )
}
export default Contact;