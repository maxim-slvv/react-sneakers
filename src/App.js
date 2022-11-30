import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';

const arr = [
  {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '12 999', imageUrl: '/img/sneakers/1.jpg'},
  {title: 'Мужские Кроссовки Nike Air Max 270', price: '12 999', imageUrl: '/img/sneakers/2.jpg'},
  {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '8 499', imageUrl: '/img/sneakers/3.jpg'},
  {title: 'Кроссовки Puma X Aka Boku Future Rider', price: '8 999', imageUrl: '/img/sneakers/4.jpg'},
  // {name: '', price: '', imageUrl: ''}
]
function App() {
  return (
    <div className="wrapper">
      <Drawer/>
      <Header/>
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
       
          {arr.map((obj) => ( //можно было сделать forEach - но он ничего не возвращает
            <Card 
              title = {obj.title} 
              price= {obj.price} 
              imageUrl={obj.imageUrl}
            />
          ))}
        </div>


      </div>
    </div>
   













  )
}

export default App;
