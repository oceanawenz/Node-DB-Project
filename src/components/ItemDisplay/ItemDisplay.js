import React, {Component} from 'react';
import './itemdisplay.css';

export default class ItemDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
           
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
        addToWishList

    } = this.props
    return (
        <div className="itemDisplayContainer">
           
           <div className="imageBox">
                <img className="itemImage" src={imageBackground} alt=""/>
           </div>
           <div className="itemContentContainer">
                {inCollection ?
                    // <button onClick={() => deleteFromWishList(index)}>Remove</button> :
                    <button>trash</button> :
                    <button className="heartBtn" onClick={() => addToWishList({id, imageBackground, inCollection: true })}>Add</button>
                }
    

                <h1>{name}</h1>
                <span>{rarity}</span> 
                <div className="vbucksContainer">
                    <img className="vbucks" src="https://gamepedia.cursecdn.com/fortnite_gamepedia/f/f3/V-bucks_icon.png"/>
                    <span>{cost}</span>
                </div>  
                
           </div>    
        </div>         
     
        );
    }
}