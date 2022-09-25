import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    answered: [{type:mongoose.SchemaTypes.ObjectId, ref:'Answer'}],
})

var User = mongoose.model('User', userSchema);

export default User;