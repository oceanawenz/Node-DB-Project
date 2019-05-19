import React, {Component} from 'react';

export default class WishList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }

    render() {
        const { id, imageBackground, removeFromWishList, index } = this.props;
    
    return (
        <div className="wishList-img">
            <img src={imageBackground} alt=""/>
            <div className="trashIcon">
                <button onClick={() => removeFromWishList(index)}>Delete</button>
            </div>
        </div>


        ) 
    }
}
