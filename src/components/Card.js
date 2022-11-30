function Card(){
    return (
      <div className="card">
        <div className="card__favorite">
          <img src="img/content/heart-unliked.svg" alt="" />
        </div>
        <div className="card__img">
          <img src="/img/sneakers/1.jpg" alt="sneaker" />
        </div>
        <h5 className="card__text">Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div>
          <div className="card__info d-flex justify-between align-center">
            <div className="card__price d-flex flex-column">
              <span>Цена:</span>
              <b>12999 руб.</b>
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