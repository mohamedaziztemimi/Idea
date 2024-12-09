"use Client"
import { useEffect } from 'react'
const useCloseModal = (ref,callback) => {
useEffect(
  ()=>{
    const handleClickOutside=(event)=>{
      if(ref.current && !ref.current.contains(event.target)){
        callback();
      }
    }
    document.addEventListener("mousedown",handleClickOutside);
    return ()=>{
      document.removeEventListener("mousedown",handleClickOutside);
    }
  } ,[ref,callback]
)
 
}

export default useCloseModal