const genrateCaption = require("../services/ai.service");
const FileUpload = require("../services/storage.service");
const postModel = require('../model/post.model')
const { v4: uuid } = require('uuid')



const createPostController = async (req, res) => {
    const file = req.file
    
    if (!req.file) {
        return res.status(400).json({
            message: "Image is required"
        });
    }

    const base64 = req.file.buffer.toString("base64");

    try {
        const caption = await genrateCaption(base64)
        const result = await FileUpload(file.buffer, `${uuid()}`)

        const post = await postModel.create({
            image: result.url,
            caption: caption,
            user: req.user._id
        })

        res.status(201).json({
            message: "Post created successfully",
            post
        });

    } catch (error) {
        if (error.status === 429) {
            return res.status(429).json({
                message: "AI rate limit exceeded. Please try again later."
            });
        }

        return res.status(500).json({
            message: "Something went wrong."
        });

    }

}

module.exports = {
    createPostController
}