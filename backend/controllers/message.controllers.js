import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // SOCKET.IO FUNCTIoNALITY

    // in parallel - so it is faster
    await Promise.all([conversation.save(), newMessage.save()]);
    // sequential - so it is slower
    // await conversation.save();
    //await newMessage.save();

    res.status(201).json({ newMessage });
  } catch (error) {
    console.log('Error in /api/messages/send:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate('messages');

    if (!conversation) {
      return res.status(200).json([]);
    }
    const messages = conversation?.messages;
    if (!messages) {
      return res.status(200).json([]);
    }

    res.status(200).json(messages);

    // SOCKET.IO FUNCTIoNALITY
  } catch (error) {
    console.log('Error in GET /api/messages:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};
