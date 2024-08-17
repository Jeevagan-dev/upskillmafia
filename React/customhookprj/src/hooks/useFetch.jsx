import React from 'react'
import { useState , useEffect ,useCallback } from 'react'

function useFetch(url) {

    const [isLoading , SetIsloading] = useState(true);
    const [data , setData] = useState(null);
    const [error ,setError] = useState(null);

    const fetchData = useCallback(async ()=>{
        try{
            const response = await fetch(url);
            if(!response.ok){
               throw new Error('Network error');
            }
            const result = await response.json();
            setData(result);   
          } 
          catch(err){
           setError('Failed to fetch data');
          }
          finally{
           SetIsloading(false);
          }
    },[url]
        
    )


    useEffect(() => {
    fetchData();
    },[url])

  return {data,isLoading,error}
}

export default useFetch

