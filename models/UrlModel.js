import mongoose from 'mongoose';


const urlSchema = new mongoose.Schema({
    alias:{
        type: String,
        required: false
    },
    url: {
        type: String,
        required: true
    },
    key :{
        type: String,
        required: false
    },
    shortUrl: {
        type : String,
        required: true
    }
})

const Saveurl = mongoose.model('Saveurl',urlSchema);

export default Saveurl