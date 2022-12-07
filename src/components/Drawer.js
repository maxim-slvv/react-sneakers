function Drawer({onClose, items = [], onRemove}){ //применяем деструктуризацию объекта props
    return(
        <div className="overlay" >
            <div className="drawer">
                <h2 className="d-flex justify-between">
                    Корзина<img onClick={onClose} className="cu-p" src="img/content/remove.svg" alt="" />
                </h2>

                {
                    items.length > 0 ?
                    <div>
                    <div className="cart__items">
                    {items.map((obj) => (
                            <div className="cart d-flex align-center">
                            <img src={obj.imageUrl} alt="Sneakers"/>
                            <div>
                                <p>{obj.title}</p>
                                <b>{obj.price}</b>
                            </div>
                            <img onClick={() => onRemove(obj.id)} className="cart__remove" src="img/content/remove.svg" alt="" />
                            </div>
                        ))}
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
                    :
                    <div className="cardEmpty d-flex align-center justify-center flex-column flex">
                        <img src="/img/content/basket-none.png" alt="" className="mb-20" />
                        <h2>Корзина пустая</h2>
                        <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                        <button onClick={onClose} className="greenButton">
                            <img src="/img/content/arrow-left.svg" alt="Arrow" />Вернуться назад
                        </button>
                    </div>

                }

             

            </div>
        </div>
    )
}

export default Drawer;