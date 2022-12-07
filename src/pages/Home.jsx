import Card from '../components/Card';

function Home(items,
  searchValue,
  setSearchValue,
  onAddToCart,
  onAddToFavorite,
  onChangeSearchInput){
    return(
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
          .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => ( 
            <Card 
              key={index}
              title = {item.title} 
              price= {item.price} 
              imageUrl={item.imageUrl}
              onFavorite={(obj)=> onAddToFavorite(obj)}
              onPlus={(obj)=> onAddToCart(obj)}
            />
        ))}
      </div>
    </div>
    )
}

export default Home;