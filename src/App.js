import React from 'react';
import {Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import {Home} from './pages/Home';




function App() {
  //обновляем корзину и добавляем туда товар который отмечен галочкой
  const [cartItems, setCartItems] = React.useState([]);

  //массив для закладок favorite
  const [favorites, setFavorites] = React.useState([]);

  const onAddToFavorite = (obj) => {
    axios.post('https://638b00687220b45d2285fede.mockapi.io/favorites', obj);
    setFavorites(prev => [...prev, obj])
  }

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

  // console.log(items)
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
      
      <Routes>
        <Route path='/' element={ 
          <Home 
            items={items}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
            onChangeSearchInput={onChangeSearchInput}
          />
        }/>
        <Route path="/favorites" element={<p>ЗАКЛАДКИ</p>}/>
      </Routes>
      
      {/* ТЕЛО ПОСЛЕ ХЕАДЕРА */}
 
    </div>
   


  )
}

export default App;
