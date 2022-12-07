import {Link} from 'react-router-dom';

function Header(props){
  return (
    <header className="header d-flex justify-between align-center p-40">
      <Link to='/'>
        <div className="header__left d-flex align-center">
          <img width='40px' height='40px' src="/img/header/logo.png" alt="logo" />
          <div className="header__info">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="header__right d-flex ">
        <li onClick={props.onClickCart} className="mr-20 d-flex align-center cu-p">
          <img src="/img/header/basket.svg" alt="Корзина" />
          <span>1205 руб.</span>
        </li>
        <li className='mr-20 d-flex align-center cu-p'>
          <Link to='/favorites'>
            <img src="/img/header/favorite.svg" alt="Закладки"/>
          </Link>
        </li>
        <li>
          <img src="/img/header/profile.svg" alt="Профиль" />
        </li>
      </ul>
    </header>
  )
}

export default Header;