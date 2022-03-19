import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// component
function Card(props){
  console.log(props)
  return(
    <>
    <div className='cards'>
      <div className='card'>
        <img src={props.imgSrc} alt="myPic" className='card__img' />
        <div className='card__info'>
          <span className='card__category'>{props.category}</span>
          <h3 className='card__title'>{props.title}</h3>
          <a href="" target="_blank">
            <button> Watch Now </button>
          </a>
        </div>
      </div>
    </div>
  </>
  )
}

ReactDOM.render( <>
  <Card imgSrc="https://i.pinimg.com/564x/bd/9b/e9/bd9be9cfc97ba73c66f51e927f2bfcc5.jpg"
    title="DARK"
    category="A Netflix Original Series"
    href=""
  />
  <Card imgSrc=""/>
  <Card imgSrc=""/>
</> ,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
