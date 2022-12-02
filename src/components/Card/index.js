import React from 'react';

import styles from './Card.module.scss'

function Card(props){
  const [isAdded, setIsAdded] = React.useState(false)

  const onClickPlus = () => {
    setIsAdded(!isAdded); //когда мы будем вызывать эту функцию - то значение инвертируется на true
    //при повторном вызове все поменяется обратно
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.onFavorite}>
        <img src="img/content/heart-unliked.svg" alt="" />
      </div>
      <div className={styles.img}>
        <img src={props.imageUrl} alt="sneaker" />
      </div>
      <h5 className={styles.text}>{props.title}</h5>
      <div>
        <div className="d-flex justify-between align-center">
          <div className={styles.price}>
            <span>Цена:</span>
            <b>{props.price} руб.</b>
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