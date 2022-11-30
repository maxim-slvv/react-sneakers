function Card(props){
    return (
      <div className="card">
        <div className="card__favorite">
          <img src="img/content/heart-unliked.svg" alt="" />
        </div>
        <div className="card__img">
          <img src={props.imageUrl} alt="sneaker" />
        </div>
        <h5 className="card__text">{props.title}</h5>
        <div>
          <div className="card__info d-flex justify-between align-center">
            <div className="card__price d-flex flex-column">
              <span>Цена:</span>
              <b>{props.price} руб.</b>
            </div>
            <button>
              <img className="card__plus" src="/img/content/plus.svg" alt="Plus"/>
            </button>
          </div>
        </div>
      </div>
    );
}

export default Card;