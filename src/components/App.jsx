import React, { useState } from "react";
import NavBarCompo from "./NavBarCompo";
import HeadingComponents from "./HeadingComponents";
import Blog from "./Blog";
import About from "./About";
import Footer from "./Footer";

import axios from "axios";



function App(){
    const [blogData, setBlogData] = useState([]);


    React.useEffect(()=>{
        axios.get('http://localhost:3001/').then(response=>{
            console.log(response.data);
            setBlogData(response.data);
            
        })
        .catch(err=>{
            console.log(err);
        });
    },[]);




    return <>
    <NavBarCompo/>
    <HeadingComponents/>
    {blogData.map(details =>{
        return <Blog
                title={details.blog_title}
                content ={details.blog_content}
                username={details.user_name}
                img_src={details.blog_img}
                />
    })}
    <About/>
    <Footer/>
    </>
}

export default App;