import { useState,useEffect } from 'react';

const timeStyle = {
  marginRight: 150,
  float: "right",
  fontSize: 20,
  fontWeight: "bold",
  color: "#19345F"
}
const Time = ()=>{
    const [timeNow,setTimeNow] = useState(new Date());
  
    useEffect(()=>{
      setInterval(()=>{
        setTimeNow(new Date());
      },1000)
    })
  
    return (
      <div style={timeStyle}>{timeNow.toLocaleTimeString()}</div>
    )
}

export default Time;