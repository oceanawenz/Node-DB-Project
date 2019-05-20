let itemCollection = require("../db.json");
let wishListCollection = []

module.exports = {
    getAllItems: (req, res, next) => {
        // console.log(req);
        res.status(200).send(itemCollection);
    },
    
    postItemToWishList: (req, res, next) => {
        const { id, name, cost, rarity, imageBackground, rating} = req.body;
        console.log(req.body)
        wishListCollection.push({id, name, cost, rarity, imageBackground, rating})
        console.log("this is wishlist", wishListCollection)
        res.status(200).send(wishListCollection);
    },
    
    updateItemRatingById: (req, res, next) => {
        console.log("this is params", req.params)
        const { id } = req.params;
        const { new_rating } = req.body;
        console.log('REQ.BODY', req.body)
        console.log('NEWRATING',new_rating)
        // let id = parseInt(req.params.id)
        // let new_rating = parseInt(req.body.new_rating)
        console.log("this is parseInt params", typeof id, typeof new_rating)
        if(id !== -1) {
            console.log(wishListCollection)
            
            if (new_rating === wishListCollection.rating ) {
                res.status(200).send(wishListCollection);
            }
            if (id >= 0 && new_rating >= 0 && new_rating <= 10) {
                wishListCollection.rating === new_rating;
                res.status(200).send(wishListCollection)
            } else {
                res.status(404).send("Not possible")
        }
    }

        
        
        
        // const index = itemCollection.findIndex(element => {
        //         return element.id == id;
        //     });
        //     if (index !== -1) {
        //         itemCollection[index].rating = new_rating;
        //         res.status(200).send(itemCollection);
        //     } else {
                // res.status(200).send(itemCollection);     
        },
           
    deleteFromWishList: (req, res, next) => {
    //delete item using value of id from url parameters
    const deleteId = req.params.id;
    //use findIndex with id to get the index of the item object
    itemIndex = wishListCollection.findIndex(item => wishListCollection.id == deleteId)
    wishListCollection.splice(itemIndex, 1);
    res.status(200).send(wishListCollection)
    }
}