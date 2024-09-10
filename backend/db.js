const mongoose = require('mongoose');
const mongoURI='mongodb+srv://anilshrivastava-gofood:Anil9936@cluster0.nryjy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// const mongoDB=()=>{
//     mongoose.connect(mongoURI,()=>{
//     console.log("cannected");
// });
// };
const mongoDB = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("connected"))
        .catch((err) => {
            console.error("MongoDB connection error:", err);
            process.exit(1); // Exit the process with failure
        });
};
module.exports = mongoDB;