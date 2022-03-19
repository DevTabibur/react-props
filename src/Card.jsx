import React from "react";
import './Card.css'

// component
function Card(props){
    return(
      <>
      <div className='cards'>
        <div className='card'>
          <img src={props.imgSrc} alt="myPic" className='card__img' />
          <div className='card__info'>
            <span className='card__category'>{props.category}</span>
            <h3 className='card__title'>{props.title}</h3>
            <a href={props.href} target="_blank" className="link">
              <button className="btn"> Watch Now </button>
            </a>
          </div>
        </div>
      </div>
    </>
    )
}

  export default Card;