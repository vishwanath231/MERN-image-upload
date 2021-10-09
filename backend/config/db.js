const mongoose = require('mongoose');

const MONGO_URI= "mongodb+srv://vishwanath:vishwanath@vishwanath.kcrbq.mongodb.net/multer?retryWrites=true&w=majority"

const connectDB = async () => {

    try {

        const conn = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`mongodb connected`.bgGreen.bold);
        
    } catch (err) {
        console.log(`mongodb connection error`.bgRed.bold);
        process.exit(1);
    }

}

module.exports = connectDB;