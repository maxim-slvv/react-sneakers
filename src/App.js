import React from 'react';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';


function App() {
  //обновляем корзину и добавляем туда товар который отмечен галочкой
  const [cartItems, setCartItems] = React.useState([
  ]);

  //открываем и закрываем корзину
  const [cartOpened, setCartOpened] = React.useState(false)

  //получаем с бэка данные карточек
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch('https://638b00687220b45d2285fede.mockapi.io/items').then((res) => {
      return res.json()
    }).then(json => {
      setItems(json)
    })
  }, [])

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }

  console.log(cartItems)

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onClose={()=> setCartOpened(false)}/>}
      <Header onClickCart={()=> setCartOpened(true)}/>
      {/* ТЕЛО ПОСЛЕ ХЕАДЕРА */}
      <div className="content p-40">
          <div className="content__title d-flex mb-40 justify-between">
            <h1 className="">Все кроссовки</h1>
            <div className="content__search">
              <img src="/img/content/search.svg" alt="" />
              <input placeholder="Поиск..." type="text" />
            </div>
          </div>
          {/* КАРТОЧКИ */}
        <div className="content__cards d-flex">
          {items.map((item) => ( //можно было сделать forEach - но он ничего не возвращает
            <Card 
              title = {item.title} 
              price= {item.price} 
              imageUrl={item.imageUrl}
              onFavorite={()=> console.log('Добавили в закладки')}
              onPlus={(obj)=> onAddToCart(obj)}
            />
          ))}
        </div>


      </div>
    </div>
   


  )
}

export default App;
