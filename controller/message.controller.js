const { createMessage, getAllMessages } = require('../service/message.service');

const allowCors = fn => async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    if (req.method === 'OPTIONS') {
        res.status(200).end()
        return
    }
    return await fn(req, res)
}

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
    postMessage: allowCors(postMessage),
    getMessages: allowCors(getMessages)
}