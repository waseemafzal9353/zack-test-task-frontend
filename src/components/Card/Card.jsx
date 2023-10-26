import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ cardData, link }) => {
  if(!cardData || !cardData.title) return null;
  const {multimedia, title, abstract} = cardData;
  const imageSrc = multimedia[0].url;
  return (
    <div className='container'>
      <div className="card">
         <Link to={link}><img src={imageSrc} alt="Card" className="card-image" /></Link>
          <div className="card-content">
            <h2 className="card-heading">{title}</h2>
            <p className="card-description">{abstract}</p>
          </div>
        </div>
    </div>
  );
}

export default Card;
