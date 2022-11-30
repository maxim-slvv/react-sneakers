import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';


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
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>


      </div>
    </div> //?-----wrapper
   













  )
}

export default App;
