const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://ansh:SLnAtLRIyVDFI8SZ@cluster0.tagmfhp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)

}

module.exports={connectDb}