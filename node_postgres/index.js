const express = require('express');
const userRouter = require('./routes/user.route');
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, () => console.log(`server start on post ${PORT}`))