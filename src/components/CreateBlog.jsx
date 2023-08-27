import React, { useState } from "react";
import NavBarCompo from "./NavBarCompo";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function CreateBlog() {

    
  let navigate = useNavigate(); 
  function routeChange(){ 
    let path = `/`; 
    navigate(path);
  }


    const [blogData, setBlogData] = useState({
        blogTitle: "",
        userName: "",
        blogContent: "",
        blogImg: ""
    });

    function handleChange(event) {
        console.log(event.target.name);
        if (event.target.name === 'titleText') {
            setBlogData(prevValue => {
                return {
                    blogTitle: event.target.value,
                    userName: prevValue.userName,
                    blogContent: prevValue.blogContent,
                    blogImg: prevValue.blogImg
                }
            })
        } else if (event.target.name === 'postText') {
            setBlogData(prevValue => {
                return {
                    blogTitle: prevValue.blogTitle,
                    userName: prevValue.userName,
                    blogContent: event.target.value,
                    blogImg: prevValue.blogImg
                }
            })
        } else if (event.target.name === 'postImg') {
            setBlogData(prevValue => {
                return {
                    blogTitle: prevValue.blogTitle,
                    userName: prevValue.userName,
                    blogContent: prevValue.blogContent,
                    blogImg: event.target.value
                }
            })
        } else if (event.target.name === 'userName') {
            setBlogData(prevValue => {
                return {
                    blogTitle: prevValue.blogTitle,
                    userName: event.target.value,
                    blogContent: prevValue.blogContent,
                    blogImg: prevValue.blogImg
                }
            })
        }
    }

    function handleSubmit() {
        console.log(blogData)
        axios.post('http://localhost:3001/add', blogData)
            .then(() => {
                console.log("Data posted");
            })
            .catch(err => {
                console.log(err);
            });

        setBlogData({
            blogTitle: "",
            userName: "",
            blogContent: "",
            blogImg: ""
        })
        routeChange();
        
    }

    return <>
        <NavBarCompo />
        <div className="createBlogDiv">
            <center><h1 className="heading">Create Blog</h1></center>
            <div className="form-group">
                <label>Username</label>
                <input type="text" onChange={handleChange} className="form-control" name="userName" aria-describedby="emailHelp" placeholder="Enter User Name" />
            </div>
            <div className="form-group">
                <label>Title/Tech-Stack</label>
                <input type="text" onChange={handleChange} className="form-control" name="titleText" aria-describedby="emailHelp" placeholder="Enter Title" />
            </div>
            <div class="form-group">
                <label>Post</label>
                <textarea type="text" onChange={handleChange} className="form-control" rows="8" name="postText"></textarea>
            </div>
            <div class="form-group">
                <label>Enter Display Image Source</label>
                <textarea type="text" onChange={handleChange} className="form-control" rows="1" name="postImg"></textarea>
            </div>
            <br />
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Publish</button>
        </div>
    </>
}

export default CreateBlog;