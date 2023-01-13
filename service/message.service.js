const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createMessage = async ({
    userName,
    text
}) => {
    return message = await prisma.message.create({
        data: {
            userName,
            text
        }
    });
};

const getAllMessages = async () => {
    return messages = await prisma.message.findMany();
}

module.exports = {
    createMessage,
    getAllMessages
}