import mongoose from "mongoose";

const schema = mongoose.Schema();

const post = new schema({
    name:{
        type: String,
        required:[true,"Name is Required"]
    },
    prompt:{
        type: String,
        required:[true,"Prompt is Required"]
    },
    photo:{
        type:String,
        required:true
    }
})

export default mongoose.model('post',postz)