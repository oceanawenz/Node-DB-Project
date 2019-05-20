import React, {Component} from 'react';
import './itemdisplay.css';
// import whiteHeart from '../../media/whiteHeart.png';
import yellowHeart from '../../media/yellowHeart.png';


export default class ItemDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }


render() {
    const {
        id,
        name,
        cost,
        rarity,
        imageBackground,
        inCollection,
        rating,
        addToWishList

    } = this.props
    return (
        <div className="itemDisplayContainer">
           
           <div className="imageBox">
                <img className="itemImage" src={imageBackground} alt=""/>
           </div>
           <div className="itemContentContainer">
                {/* {inCollection ?
                    <button>Unfavorite</button>  :
                    <button onClick={() => addToWishList({id, imageBackground, inCollection })} >Favorite</button> 
                        
                } */}
                {inCollection ?
                    // <button onClick={() => deleteFromWishList(index)}>Remove</button> :
                    <button>trash</button> :
                    <img className="heartBtn" src={yellowHeart} alt="addButton" onClick={() => addToWishList({id, imageBackground, rating, inCollection: true })}/>
                    
                }
    

                <h2>{name}</h2>
                <h3>{rarity}</h3>
                <div className="vbucksContainer">
                    <img className="vbucks" src="https://gamepedia.cursecdn.com/fortnite_gamepedia/f/f3/V-bucks_icon.png" alt="vBucks-icon"/>
                    <span>{cost}</span>
                </div>  
                
           </div>    
        </div>         
     
        );
    }
}
