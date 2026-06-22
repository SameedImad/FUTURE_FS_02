const mongoose=require("mongoose")

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ MongoDB Connected");
    }
    catch(e){
        console.log("❌ Database Connection Error:", e.message);
    }
};
module.exports = connectDB;
