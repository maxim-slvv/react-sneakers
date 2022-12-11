import Card from '../components/Card';
function Favorites({items, onAddToFavorite}){
    return(
        <div className="content p-40">
        <div className="content__title d-flex mb-40 justify-between">
          <h1>Мои закладки</h1>
       
        </div>
   
      <div className="content__cards d-flex">
      {
          items
         
            .map((item, index) => ( 
              <Card 
                key={index}
                title = {item.title} 
                price= {item.price} 
                imageUrl={item.imageUrl}
                favorited={true}
                onFavorite = {onAddToFavorite}
              />
          ))}
      </div>
    </div>
    )
}

export {Favorites};