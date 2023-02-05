import { useState,useEffect } from "react";

const useFetch = (url)=>{

    const [data,setBlogs]=useState(null);
    const [loading,setloading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        fetch(url)
        .then(res =>{
            if(!res.ok){
                throw Error(" couldn't fetch data ")
            }
                return res.json();
        })
        .then(dataa =>{
            setBlogs(dataa);
            setloading(false)
            setError(null)
        })
        .catch(err =>{
            setloading(false);
            setError(err.message)
        })
    },[url]);
    return {data,loading,error}
}

export default useFetch;