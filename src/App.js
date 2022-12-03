import React from 'react';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';


function App() {
  const [items, setItems] = React.useState(
    [
      {
       "title": "Мужские Кроссовки Nike Blazer Mid Suede",
       "price": "12 999",
       "imageUrl": "/img/sneakers/1.jpg"
      },
      {
       "title": "Мужские Кроссовки Nike Air Max 270",
       "price": "12 999",
       "imageUrl": "/img/sneakers/2.jpg"
      },
      {
       "title": "Мужские Кроссовки Nike Blazer Mid Suede",
       "price": "8 499",
       "imageUrl": "/img/sneakers/3.jpg"
      },
      {
       "title": "Кроссовки Puma X Aka Boku Future Rider",
       "price": "8 999",
       "imageUrl": "/img/sneakers/4.jpg"
      },
      {
       "title": "Мужские Кроссовки Under Armour Curry 8",
       "price": "15 199",
       "imageUrl": "/img/sneakers/5.jpg"
      },
      {
       "title": "Мужские Кроссовки Nike Kyrie 7",
       "price": "11 299",
       "imageUrl": "/img/sneakers/6.jpg"
      },
      {
       "title": "Мужские Кроссовки Jordan Air Jordan 11",
       "price": "10 799",
       "imageUrl": "/img/sneakers/7.jpg"
      },
      {
       "title": "Мужdfdfdfdf ffffffffdf ffffffffff fffffffff ffffffffские Кроссовки Nike LeBron XVIII",
       "price": "16 499",
       "imageUrl": "/img/sneakers/8.jpg"
      },
      {
       "title": "Мужские Кроссовки Nike Lebron XVIII Low",
       "price": "13 999",
       "imageUrl": "/img/sneakers/9.jpg"
      },
      {
       "title": "Мужские Кроссовки Nike Blazer Mid Suede",
       "price": "8 499",
       "imageUrl": "/img/sneakers/1.jpg"
      },
      {
       "title": "Кроссовки Puma X Aka Boku Future Rider",
       "price": "8 999",
       "imageUrl": "/img/sneakers/2.jpg"
      },
      {
       "title": "Мужские Кроссовки Nike Kyrie Flytrap IV",
       "price": "11 299",
       "imageUrl": "/img/sneakers/10.jpg"
      }
     ]
  );
  const [cartOpened, setCartOpened] = React.useState(false)

  return (
    <div className="wrapper">
      {cartOpened && <Drawer onClose={()=> setCartOpened(false)}/>}
      <Header onClickCart={()=> setCartOpened(true)}/>

      {/* ТЕЛО ПОСЛЕ ХЕАДЕРА */}
      <div className="content pt-40 pl-40 pr-40 pb-10">
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
