


const createPostController = async (req, res) => {
    console.log(req.file)

    res.status(200).json({
        Message: "Done"
    })
}

module.exports = {
    createPostController
}