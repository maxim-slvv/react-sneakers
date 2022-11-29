


function App() {
  return (

    <div className="wrapper">
      <div className="overlay">
        <div className="drawer">
          <h3 className="d-flex justify-between">
            Корзина<img className="cu-p" src="img/content/remove.svg" alt="" />
          </h3>
          <div className="cart__items">
            <div className="cart d-flex align-center">
              <img src="/img/sneakers/2.jpg" alt="Sneakers"/>
              <div>
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="cart__remove" src="img/content/remove.svg" alt="" />
            </div>

            <div className="cart d-flex align-center">
              <img src="/img/sneakers/11.jpg" alt="Sneakers"/>
              <div>
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="cart__remove" src="img/content/remove.svg" alt="" />
            </div>


          </div>
          <div className="cartTotalBlock">
            <ul>
              <li className="d-flex">
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li className="d-flex">
                <span>Налог 5%: </span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ<img src="/img/content/arrow.svg" alt="" />
            </button>
          </div>
          
          

        </div>{/* drawer */}
      </div>


      <header className="header d-flex justify-between align-center p-40">
        <div className="header__left d-flex align-center">
          <img width='40px' height='40px' src="/img/header/logo.png" alt="" />
          <div className="header__info">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="header__right d-flex ">
          <li className="mr-30 d-flex align-center">
            <img src="/img/header/basket.svg" alt="" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img src="/img/header/profile.svg" alt="" />
          </li>
        </ul>
      </header>

      <div className="content p-40">
     
          <div className="content__title d-flex mb-40 justify-between">
            <h1 className="">Все кроссовки</h1>
            <div className="content__search">
              <img src="/img/content/search.svg" alt="" />
              <input placeholder="Поиск..." type="text" />
            </div>
          </div>
          
        <div className="content__cards d-flex">
          <div className="card">
            <div className="card__favorite">
            <img src="img/content/heart-liked.svg" alt="" />
            </div>
            <div className="card__img">
              <img src="/img/sneakers/1.jpg" alt="sneaker"/>
            </div>
            <h5 className="card__text">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div>
              <div className="card__info d-flex justify-between align-center">
              <div className="card__price d-flex flex-column">
                <span>Цена:</span>
                <b>12999 руб.</b>
              </div>
              <button>
                <img className="card__plus" src="/img/content/plus.svg" alt="Plus" />
              </button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__img">
              <img src="/img/sneakers/2.jpg" alt="sneaker"/>
            </div>
            <h5 className="card__text">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div>
              <div className="card__info d-flex justify-between align-center">
              <div className="card__price d-flex flex-column">
                <span>Цена:</span>
                <b>12999 руб.</b>
              </div>
              <button>
                <img className="card__plus" src="/img/content/plus.svg" alt="Plus" />
              </button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__img">
              <img src="/img/sneakers/3.jpg" alt="sneaker"/>
            </div>
            <h5 className="card__text">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div>
              <div className="card__info d-flex justify-between align-center">
              <div className="card__price d-flex flex-column">
                <span>Цена:</span>
                <b>12999 руб.</b>
              </div>
              <button>
                <img className="card__plus" src="/img/content/plus.svg" alt="Plus" />
              </button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__img">
              <img src="/img/sneakers/4.jpg" alt="sneaker"/>
            </div>
            <h5 className="card__text">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div>
              <div className="card__info d-flex justify-between align-center">
              <div className="card__price d-flex flex-column">
                <span>Цена:</span>
                <b>12999 руб.</b>
              </div>
              <button>
                <img className="card__plus" src="/img/content/plus.svg" alt="Plus" />
              </button>
              </div>
            </div>
          </div>
        </div>

       


      </div>
    </div> //?-----wrapper
   













  )
}

export default App;
