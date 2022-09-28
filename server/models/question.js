import mongoose from 'mongoose';

const questionSchema = mongoose.Schema({
    title: String,
    description: String,
    tags: [String],
    askedBy: {type: mongoose.SchemaTypes.ObjectId, ref:'User'},
    answers: [{type: mongoose.SchemaTypes.ObjectId, ref:'Answer'}],
    date: {
        type: Date,
        default: new Date(),
    },
});

var Question = mongoose.model('Question', questionSchema);

export default Question;