const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');
const path = require('path')

dotenv.config({ path: 'backend/config/config.env' });


const app = express();

app.use(cors());
app.use(express.json());


connectDB();

app.use('/api/v1/upload' , require('./routes/router'));



if (process.env.NODE_ENV === 'production') {
    app.use(express.static('/frontend/build'));

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, '/frontend', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    })
}



const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`server running a ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.bgYellow.bold);
})