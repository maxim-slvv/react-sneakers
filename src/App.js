import React from 'react';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';


function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://638b00687220b45d2285fede.mockapi.io/items').then((res) => {
      return res.json()
    }).then(json => {
      setItems(json)
    })
  }, [])
 

  const [cartOpened, setCartOpened] = React.useState(false)
  return (
    <div className="wrapper">
      {cartOpened && <Drawer onClose={()=> setCartOpened(false)}/>}
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
          {items.map((obj) => ( //можно было сделать forEach - но он ничего не возвращает
            <Card 
              title = {obj.title} 
              price= {obj.price} 
              imageUrl={obj.imageUrl}
              onFavorite={()=> console.log('Добавили в закладки')}
              onPlus={()=> console.log('Нажали плюс')}
            />
          ))}
        </div>


      </div>
    </div>
   


  )
}

export default App;
