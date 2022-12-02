import styles from './Card.module.scss'

function Card(props){

    return (
      <div className={styles.card}>
        <div className={styles.favorite}>
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
            <button onClick={props.onClick}>
              <img src="/img/content/plus.svg" alt="Plus"/>
            </button>
          </div>
        </div>
      </div>
    );
}

export default Card;