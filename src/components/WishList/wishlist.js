import React, {Component} from 'react';
import './wishlist.css'
import trash from '../../media/trash.png';

export default class WishList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            new_rating: this.props.rating
        }
        
    }

    

    render() {
        const { imageBackground, deleteFromWishList, updateItemRatingById, index, id, rating } = this.props;
        const {new_rating} = this.state;
        console.log(this.state.items)
    return (
        <div className="wishList-imgContainer">
        
            <div className="item-bg">
                <img className="item-img" src={imageBackground} alt=""/>
            </div>
            <div className="itemRating">
                <span>{new_rating}</span>
            </div>
            <div className="trashIcon">
                
                <img src={trash} alt="addButton" onClick={() => 
                    deleteFromWishList(index)}/>
            </div>
            
            
                    <div className="ratingContainer">
                    <input onChange={element =>
                        this.setState({
                        new_rating: element.target.value
                        })
                    }
                    value={new_rating}
                    />
                    <button onClick={() => updateItemRatingById(id, new_rating) }>
                        Rate
                    </button>
                    </div>
                    
            
        </div>
    )
}
}

            
                    
