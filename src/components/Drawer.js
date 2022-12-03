function Drawer(props){
    return(
        // style={{display: 'none'}}
        <div className="overlay" >
            <div className="drawer">
                <h3 className="d-flex justify-between">
                    Корзина<img onClick={props.onClose} className="cu-p" src="img/content/remove.svg" alt="" />
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
            </div>
        </div>
    )
}

export default Drawer;