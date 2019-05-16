let itemCollection = require("../db.json");

module.exports = {
    getAllItems: (req, res, next) => {
        res.status(200).send(itemCollection);
    },
    
    postItemToWishList: (req, res, next) => {
        const { id, name, cost, images.background } = req.body;
        itemCollection.push({id, name, cost, images.background})
        res.status(200).send(itemCollection);
    },
    
    updateItemFavorite: (req, res, next) => {
        const {id} = req.params;
        
    }

}