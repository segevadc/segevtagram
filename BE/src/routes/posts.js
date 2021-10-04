const postModel = require("../models");
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


/* GET users listing. */
router.get("/", async (request, response) => {
    const users = await postModel.find({});
    try {
        response.send(users);
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = router;
