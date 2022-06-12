import { useState } from "react";

const User=()=>{
    const[data,setdata]=useState(null)
    const[i,seti]=useState(false)
const update=(e)=>{
   
   setdata(e.target.value)
}
return(
    <>
    {
        i?
        <h1>{data}</h1>
       :null
    }
    <input type="text" onChange={update}></input>
    <button onClick={()=>seti(true)}>Click</button>
    
 </>
)
}
export default User;