import React from 'react';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';
import axios from 'axios';


function App() {
  //обновляем корзину и добавляем туда товар который отмечен галочкой
  const [cartItems, setCartItems] = React.useState([]);

  //открываем и закрываем корзину
  const [cartOpened, setCartOpened] = React.useState(false)

  //получаем с бэка данные карточек
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    // переделываем c fetch на axios
    axios.get('https://638b00687220b45d2285fede.mockapi.io/items').then(res =>{
      setItems(res.data);
    });
    axios.get('https://638b00687220b45d2285fede.mockapi.io/cart').then(res =>{
      setCartItems(res.data);
    });

  }, [])

  const onAddToCart = (obj) => {
    // говорим по вот этой ссылке передай объект - который возвращает метод onAddToCart
    axios.post('https://638b00687220b45d2285fede.mockapi.io/cart', obj);
    // а потом мы его добавляем в массив корзины
    setCartItems(prev => [...prev, obj])
  }
  
  //удаляем данные с бэка
  const onRemoveItem = (id) => {
    axios.delete(`https://638b00687220b45d2285fede.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  }


  //поиск по странице
  const [searchValue, setSearchValue] = React.useState('');
  
  const onChangeSearchInput = (event) =>{
    setSearchValue(event.target.value);
  }

  return (
  
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onClose={()=> setCartOpened(false)} onRemove={onRemoveItem}/>}
      <Header onClickCart={()=> setCartOpened(true)}/>
      {/* ТЕЛО ПОСЛЕ ХЕАДЕРА */}
      <div className="content p-40">
          <div className="content__title d-flex mb-40 justify-between">
            <h1>{searchValue ? `Поиск по запросу: '${searchValue}'` : 'Все кроссовки'}</h1>
            <div className="content__search">
              <img src="/img/content/search.svg" alt="" />
              {searchValue && <img onClick={() => setSearchValue('')} 
              className="clear cu-p" src="img/content/remove.svg" alt="Clear" />}
              <input
                onChange={onChangeSearchInput} 
                value={searchValue} 
                placeholder="Поиск..." 
                type="text" />
            </div>
          </div>
          {/* КАРТОЧКИ */}
        <div className="content__cards d-flex">
          {items
            //исключаем карточки которые не подходят по описанию
            //переводим в нижний регистр значение названия карточки и переводим значение поиска
            .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            //можно было сделать forEach - но он ничего не возвращает
            .map((item, index) => ( 
              <Card 
                key={index}
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
