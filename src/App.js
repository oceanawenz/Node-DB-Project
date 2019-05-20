import React, { Component } from 'react';
import Header from './components/Header/Header';
import ItemDisplay from './components/ItemDisplay/ItemDisplay';
import WishList from './components/WishList/WishList';
// import FavoriteBtn from './components/FavoriteBtn/FavoriteBtn';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        itemCollection: [],
        wishListCollection: []
      }
      this.getMyItemCollection = this.getMyItemCollection.bind(this);
      this.addToWishList = this.addToWishList.bind(this);
      this.updateItemRatingById = this.updateItemRatingById.bind(this);
      this.removeFromWishList = this.removeFromWishList.bind(this);
   
  
  }
 
  componentDidMount() {
    this.getMyItemCollection();
  }

getMyItemCollection() { 
    axios.get(`/api/fortnite_items`).then(response => {
      console.log(response)
        this.setState({
        itemCollection: response.data
         })
     })
  }

postItemToWishList(item) {
  axios.post("/api/fortnite_items", item).then((response) => {
    this.setState({
      itemCollection: response.data
    })
  })
}

deleteFromWishList(item) {
  axios.delete("/api/fortnite_items:id", item).then((response) => {
    this.setState({
      itemCollection: response.data
    })
  })
}




updateItemRatingById (id, rating) {
  axios.put(`/api/fortnite_items/${id}/${rating}`, {}).then((response) => {
    this.setState({
      itemCollection: response.data
    })
  })
}


addToWishList(item) {
  this.setState({
    wishListCollection: [...this.state.wishListCollection, item],
  });
  // this.setState ({
  //   favorited: !this.state.favorited
  // })
  
}    


removeFromWishList(index) {
  let copiedWishListCollection = [...this.state.wishListCollection];
  copiedWishListCollection.splice(index, 1);
  this.setState({
    wishListCollection: copiedWishListCollection
  })

}

render() {
    const {itemCollection, wishListCollection} = this.state;
    const mappedItemCollection = itemCollection.map((element) => {
      console.log(element, 'in map');
      return (
        <div>
            <ItemDisplay
            key={element.id}
            name={element.name}
            cost={element.cost}
            rarity={element.rarity}
            rating={element.rating}
            imageBackground={element.imageBackground}
            addToWishList={this.addToWishList}
            inCollection = {false}
            />
        </div>   
      );
    })

    const mappedWishListCollection = wishListCollection.map((element) => {
      return (
        <div> 
        <WishList
          key={element.id}
          rating={element.rating}
          imageBackground={element.imageBackground}
          removeFromWishList={this.removeFromWishList}
        />
        </div>
      )
    })


  
    

  return (
    <div className="App">
      <div className="header">
        <Header/>
      </div>
      <div className="content">
        <div className="items">
          <div className="shadow"></div>
          <h1>Items</h1>
          <div className="mappedItems">
              {mappedItemCollection}
              {/* <FavoriteBtn/> */}
              
          </div>
        </div>
        <div className="wishList">
          <h1>Wishlist</h1>
          {mappedWishListCollection}
          
        </div>
      </div>
      
      
     
    </div>
  );
  }
}


