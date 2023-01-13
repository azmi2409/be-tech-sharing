const { createMessage, getAllMessages } = require('../service/message.service');

const postMessage = async (req, res) => {
    const { userName, text } = req.body;
    const message = await createMessage({ userName, text });
    res.send(message);
}

const getMessages = async (req, res) => {
    const messages = await getAllMessages();
    res.send(messages);
}

module.exports = {
    postMessage,
    getMessages
}