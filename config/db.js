import mongoose from "mongoose";

mongoose.connect(`mongodb+srv://hussama9100:ali_123456@cluster0.xtnzl9x.mongodb.net/`)
.then(()=>{
    console.log("Connection to the database is scuccessful")
})
.catch((err)=>{
    console.log("Error while connecting", err );
})

export default mongoose.connection;