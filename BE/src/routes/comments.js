const {commentModel} = require("../models");
const express = require('express');
const router = express.Router();


router.post("/add", async (request, response) => {
    const post = new commentModel(request.body);
    try {
        await post.save();
        response.send(post);
    } catch (error) {
        console.log(error)
        response.status(500).send(error);
    }
});


/* GET comments. */
router.get("/", async (request, response) => {
    const comments = await commentModel.find({"postId":request.query.postId});
    try {
        response.send(comments);
    } catch (error) {
        response.status(500).send(error);
    }
});


module.exports = router;
