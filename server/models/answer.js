import mongoose from 'mongoose';

const answerSchema = mongoose.Schema({
    content: String,
    question: {type: mongoose.SchemaTypes.ObjectId, ref:'Question'},
    author: {type: mongoose.SchemaTypes.ObjectId, ref:'User'},
    date: {
        type: Date,
        default: new Date(),
    },
    likeCount: {
        type: Number,
        default: 0,
    }
})

var Answer = mongoose.model('Answer', answerSchema);

export default Answer;