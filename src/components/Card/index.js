import React from 'react';

import styles from './Card.module.scss'

function Card({onFavorite, imageUrl, title, price, onPlus, favorited = false }){
  const [isAdded, setIsAdded] = React.useState(false)
  const [isFavorite, setIsFavorite] = React.useState(favorited)
  const onClickPlus = () => {
    onPlus({imageUrl, title, price});
    setIsAdded(!isAdded);
  }
  const onClickFavorite = () => {
    onFavorite({imageUrl, title, price});
    setIsFavorite(!isFavorite);
  }
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src={isFavorite ? 'img/content/heart-liked.svg' : 'img/content/heart-unliked.svg'} alt="Favorite" />
      </div>
      <div className={styles.img}>
        <img src={imageUrl} alt="sneaker" />
      </div>
      <h5 className={styles.text}>{title}</h5>
      <div>
        <div className="d-flex justify-between align-center">
          <div className={styles.price}>
            <span>Цена:</span>
            <b>{price} руб.</b>
          </div>
            <img className={styles.plus}
              onClick={onClickPlus} 
              src={isAdded ? "/img/content/btn-checked.svg" : "/img/content/plus.svg"}
              alt="Plus"
            />
        </div>
      </div>
    </div>
  );
}

export default Card;