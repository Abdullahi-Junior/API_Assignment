const express = require('express')
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const cors = require('cors');
app.use(express.json());
app.use(cors());
const app = express()
app.get('/', (req, res) => {
  res.send('Hello World I am Abdullahi CSE Master');
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

mongoose.connect('mongodb+srv://abdullahi:abdullahi@cluster0.igt9foq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log("Connected! to MongoDB");
}).catch((err) =>{
    console.log( "Failed to connect to MongoDB",err);
});

//mongodb+srv://abdullahi:<db_password>@cluster0.igt9foq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0