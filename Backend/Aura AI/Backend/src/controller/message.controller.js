const messageModel = require("../model/message.model");

const getMessages = async (req, res) => {
    try {
        const { chatId } = req.params;

        const messages = await messageModel
            .find({ chat: chatId })
            .sort({ createdAt: 1 });

        res.status(200).json({
            success: true,
            messages,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = { getMessages };