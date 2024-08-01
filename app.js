require('dotenv').config()
require('express-async-errors')
const express = require('express');
const productrouter = require('./routes/products')
require('./db/connect')
const app = express();

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler');
const connectDB = require('./db/connect');
const router = require('./routes/products');
const port = process.env.PORT||3000
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('<h1>Store Api</h1><a href="/api/v1/products">product route</a></a>')
})
 app.use('/api/v1/products',productrouter)
app.use(notFoundMiddleware)
app.use(errorMiddleware)
const start = async ()=>{
    try{
app.listen(port, console.log(`server is listeningon${port}`))
await connectDB(process.env.MONGO_URI)
}
catch(error){
    console.log(error)
}
}
start()