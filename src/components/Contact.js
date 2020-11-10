import React from 'react'


const Contact = (props) => {
    
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.pictureUrl} alt="Imagen"/>
            <p> Popularity: {props.popularity}</p>
            <p>Action</p>
        </div>
    )
}

export default Contact

