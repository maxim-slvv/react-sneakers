function Header(props){
    return(
        <header className="header d-flex justify-between align-center p-40">
        <div className="header__left d-flex align-center">
          <img width='40px' height='40px' src="/img/header/logo.png" alt="" />
          <div className="header__info">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="header__right d-flex ">
          <li onClick={props.onClickCart} className="mr-30 d-flex align-center cu-p">
            <img src="/img/header/basket.svg" alt="" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img src="/img/header/profile.svg" alt="" />
          </li>
        </ul>
      </header>
    )
}

export default Header;