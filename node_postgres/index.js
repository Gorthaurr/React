require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser =require('cookie-parser');
const db = require('./db');
const router = require('./routes/index');
const errorMiddleware = require('./middlewares/error-middleware')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/', router)
app.use(errorMiddleware)// обязательно подключать последним
// app.use('/api', userRouter)


const start = async () => {
    try{
        await db.connect()  
        app.listen(PORT, () => console.log(`server start on post ${PORT}`))
    }
    catch(e) {
        console.log(e)
    }
}

start()
