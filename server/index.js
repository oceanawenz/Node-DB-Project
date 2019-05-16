const express = require("express");
const app = express();
const {
    getAllItems,
    postItemToWishList,
    updateItemFavorite,
    deleteFromWishList,
} = require("./controller/itemController");


app.use(express.json());

app.get("/api/fortnite_items", getAllItems);
app.post("./api/post/fortnite_items", postItemToWishList);
app.put("/api/fortnite_items:id", updateItemFavorite);
app.delete("/api/fortnite_items:id", deleteFromWishList);

const port = 4000;

app.listen(port, () => console.log(`server listening on port ${port}`));