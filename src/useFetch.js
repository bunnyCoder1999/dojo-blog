import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    
    const [isPending, setisPending] = useState(true);
    
    const [error, setError] = useState(null);
    
    useEffect(() => {
      const abortCont = new AbortController();
      setTimeout(() => {
        fetch(url, {signal: abortCont.signal})
          .then(res => {
            console.log(res);
    
            if(!res.ok){
              throw Error('Could not fetch data for that resource');
            }
            return res.json();
          })
          .then(data => {
            setError(null);
            setData(data);
            setisPending(false);
          })
          .catch(err => {
            if(err.name === 'AbortError'){
              console.log('fetch aborted');
            }
            else{
              setError(err.message);
              setisPending(false);
            }
            
          })
        },1000);

        return () => abortCont.abort();
       },[url]);  //url set as a dependency, whenever url changes useEffect runs

       return {data, isPending, error};
}

export default useFetch;