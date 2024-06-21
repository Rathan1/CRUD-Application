import mongoose from 'mongoose';



const dbConnect=async ()=>{
    try{
        mongoose.connect(process.env.DB_URL)
        console.log('mongodb is connected');
    }catch(err){
        console.log(error);
    }
}
export default dbConnect