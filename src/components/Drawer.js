function Drawer({onClose, items = [], onRemove}){ //применяем деструктуризацию объекта props
    return(
        <div className="overlay" >
            <div className="drawer">
                <h3 className="d-flex justify-between">
                    Корзина<img onClick={onClose} className="cu-p" src="img/content/remove.svg" alt="" />
                </h3>
                <div className="cart__items">
                {
                    items.map((obj) => (
                        <div className="cart d-flex align-center">
                        <img src={obj.imageUrl} alt="Sneakers"/>
                        <div>
                            <p>{obj.title}</p>
                            <b>{obj.price}</b>
                        </div>
                        <img onClick={() => onRemove(obj.id)} className="cart__remove" src="img/content/remove.svg" alt="" />
                        </div>
                    ))
                }
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