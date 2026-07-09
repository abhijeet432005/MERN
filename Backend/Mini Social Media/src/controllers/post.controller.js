const genrateCaption = require("../services/ai.service");
const FileUpload = require("../services/storage.service");



const createPostController = async (req, res) => {
    console.log(req.file)
    const base64 = req.file.buffer.toString("base64");

    try {
        const caption = await genrateCaption(base64)

        res.status(200).json({
            caption
        })
    } catch (error) {
        return res.status(429).json({
            "Message": "Rate limit exceeded. Please try again later."
        })
    }
}

module.exports = {
    createPostController
}