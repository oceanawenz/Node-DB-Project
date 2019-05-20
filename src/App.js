import React, { Component } from 'react';
import Header from './components/Header/Header';
import ItemDisplay from './components/ItemDisplay/ItemDisplay';
import WishList from './components/WishList/WishList';
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
      // this.addToWishList = this.addToWishList.bind(this);
      this.updateItemRatingById = this.updateItemRatingById.bind(this);
      this.deleteFromWishList = this.deleteFromWishList.bind(this);
      this.postItemToWishList = this.postItemToWishList.bind(this);
  
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
  console.log(item, "this is the item")
  axios.post("/api/fortnite_items", item).then((response) => {
    console.log("this is post response", response.data)
    this.setState({
      wishListCollection: response.data
    })
  })
}

 deleteFromWishList( item) {
   axios.delete("/api/fortnite_items:id", item).then((response) => {
     this.setState({
       wishListCollection: response.data
    })
   })
}




updateItemRatingById (id, new_rating) {
  console.log('NEWRATING', new_rating)
  console.log('ID', id)
  axios.put(`/api/fortnite_items/${id}`, {new_rating}).then((response) => {
    console.log('this is rate response', response.data)
    this.setState({
      wishListCollection: response.data
    })
  })
}


removeFromWishList(index) {
  let copiedWishListCollection = [...this.state.wishListCollection];
  copiedWishListCollection.splice(index, 1);
  console.log(copiedWishListCollection)
  this.setState({
    wishListCollection: copiedWishListCollection
  })

}

render() {
    const {itemCollection, wishListCollection} = this.state;
    const mappedItemCollection = itemCollection.map((element) => {
      // console.log(element, 'in map');
      console.log('WISHLIST COLLECTION', wishListCollection)
      console.log("this is element id", element.id)
      return (
        <div key={element.id}>
            <ItemDisplay
            id={element.id}
            name={element.name}
            cost={element.cost}
            rarity={element.rarity}
            rating={element.rating}
            imageBackground={element.imageBackground}
            postItemToWishList={this.postItemToWishList}
            inCollection = {false}
            />
        </div>   
      );
    })

    const mappedWishListCollection = wishListCollection.map((element, index) => {
      return (
        <div> 
        <WishList
          id={element.id}
          rating={element.rating}
          imageBackground={element.imageBackground}
          deleteFromWishList={this.deleteFromWishList}
          updateItemRatingById={this.updateItemRatingById}
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


