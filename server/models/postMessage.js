import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    category: String,
    message: String,
    creator: String,
    selectedFile: String,
    description: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    things: {
        type: String,
        default: "",

    }

})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;