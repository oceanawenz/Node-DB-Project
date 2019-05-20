import React, {Component} from 'react';
import './wishlist.css'
import trash from '../../media/trash.png';

export default class WishList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            newRating: ''
        }
    }

    

    render() {
        const { id, imageBackground, removeFromWishList, updateItemRatingById, index, rating } = this.props;
    
    return (
        <div className="wishList-imgContainer">
        
            <div className="item-bg">
                <img className="item-img" src={imageBackground} alt=""/>
            </div>
            <div className="itemRating">
                <span>{rating}</span>
            </div>
            <div className="trashIcon">
                
                <img src={trash} alt="addButton" onClick={() => removeFromWishList(index)}/>
            </div>
           
            
            
                    <div className="ratingContainer">
                    <input onChange={element =>
                        this.setState({
                        newRating: element.target.value
                        })
                    }
                    value={this.state.newRating}
                    />
                    <button onClick={() => updateItemRatingById(id, this.state.newRating)}>
                        Rate
                    </button>
                    </div>
                    
            
        </div>
    )
}
}

            
                    
