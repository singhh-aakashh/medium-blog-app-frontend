import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

interface blog{
    posts:{
        id:string,
        title:string,
        content:string,
        publishedDate:string

    }[]
}
const initial={
    "posts":[{
        id:"123",
        title:"dummy",
        content:"dummydata",
        publishedDate:"01/01/0001"
    }]
}

export const useUserBlogs =() =>{
    const[blogs,setBlogs]=useState<blog>(initial);
  const[loading,setLoading]=useState(true);

  useEffect(()=>{
    axios.get(`${BACKEND_URL}/api/v1/blog/user/blogs`,{
        headers:{
            Authorization:localStorage.getItem("token")
        }
    }).then(res => {
        setBlogs(res.data.posts)
        setLoading(false);
    })
  },[])
return{
    loading,
    blogs
}
    
}