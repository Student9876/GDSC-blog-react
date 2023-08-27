const express = require('express');
const cors = require('cors');
const app = express();
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


var userData;

// Database
const dbName = process.env.DB_NAME;
const userName = process.env.USER_NAME;
const pass = process.env.PASS;
const url = "mongodb+srv://" + userName + ":" + pass + "@cluster0.tyuv1lc.mongodb.net/" + dbName;
async function run() {
    await mongoose.connect(url, { useNewUrlParser: true });
}

run();


const blogDataSchema = {
    blog_title: String,
    user_name: String,
    blog_content: String,
    blog_img: String
};
const Blog = mongoose.model('blog', blogDataSchema);


app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
})
);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.get('/', async (req, res) => {
    await Blog.find().then(data => {
        userData = data;
    })
        .catch(err => {
            console.log(err);
        })
    res.json(userData);
})



app.post('/add', async (req, res) => {
    const blog = new Blog({
        blog_title: req.body.blogTitle,
        user_name: req.body.userName,
        blog_content: req.body.blogContent,
        blog_img: req.body.blogImg
    });
    await blog.save();
});

// app.post("/delete", async (req, res) => {
//     
// })


app.listen(3001, () => {
    console.log("Server is running on port 3001");
})