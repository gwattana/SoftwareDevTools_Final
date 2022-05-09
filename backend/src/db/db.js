import mongoose from 'mongoose';
const  MONGO_URI  = "mongodb+srv://genwtn:0898911588@cluster0.bhdcu.mongodb.net/Cluster0?retryWrites=true&w=majority";

exports.connect = () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false
    }).then(() => {
        console.log("Successfully connected to database");
    }).catch((error) => {
        console.log("Error connecting to database");
        console.error(error);
        process.exit(1);
    })
}