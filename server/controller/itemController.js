let itemCollection = require("../db.json");
// let myItems = []

module.exports = {
    getAllItems: (req, res, next) => {
        console.log(req);
        res.status(200).send(itemCollection);
    },
    
    postItemToWishList: (req, res, next) => {
        const { id, name, cost, rarity, imageBackground, imageTransparent } = req.body;
        wishListCollection.push({id, name, cost, rarity, imageBackground})
        res.status(200).send(myItems);
    },
    
    updateItemFavorite: (req, res, next) => {
        const {id} = req.params;
        const {favorite} = req.query;
        const index = itemCollection.findIndex((element) => {
            return element.id == id
        });
    },
    
    deleteFromWishList: (req, res, next) => {
    //delete item using value of id from url parameters
    const deleteId = req.params.id;
    //use findIndex with id to get the index of the item object
    itemIndex = items.findIndex(item => item.id == deleteId)
    items.splice(itemIndex, 1);
    res.status(200).send(items)
    }
}