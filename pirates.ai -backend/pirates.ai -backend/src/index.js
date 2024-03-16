const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authenticate = require('./middleware/authenticat.js');

const app = express();

app.use(cors());
app.use(express.json()); // This line is crucial.



app.get("/",(req,res)=>{
    return res.status(200).send({message:"welcome to ecommerce api - node"})
})


const authRouter=require("./routes/auth.routes.js");
app.use("/auth",authRouter);

const userRouter = require("./routes/user.routes.js");
app.use('/user', userRouter);
app.use('/profile',authenticate,  userRouter);

const contactMessageRoutes = require('./routes/message.routes.js'); 
app.use('/api', contactMessageRoutes);



module.exports={app};