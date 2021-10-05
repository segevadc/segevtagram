const {postModel} = require("../models");
const express = require('express');
const router = express.Router();


router.post("/add_post", async (request, response) => {
    const post = new postModel(request.body);
    try {
        await post.save();
        response.send(post);
    } catch (error) {
        response.status(500).send(error);
    }
});


/* GET posts. */
router.get("/", async (request, response) => {
    const posts = await postModel.find({});
    try {
        response.send(posts);
    } catch (error) {
        response.status(500).send(error);
    }
});

/* GET single post by id. */
router.get("/:id", async (request, response) => {
    let post = await postModel.find({"id": request.params.id});
    try {
        response.send(post[0]);
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = router;
