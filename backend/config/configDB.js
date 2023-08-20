import mongoose from "mongoose";

const connectDB=(url)=>{
    try{
        mongoose.connect(url)
        console.log("Mongoose Connected!")
    }
    catch(err){
        throw new Error (err);
    }
}

export default connectDB