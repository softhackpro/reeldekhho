import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Saved = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [saved, setSaved] = useState([])
  const Usersid = 'demo'
  const fetchsaved = async () =>{
    const res = await axios.get(`${backendUrl}/post/fetchsaved/${Usersid}`)
   console.log(res.data, 'coming from saved');
   
    setSaved(res.data)
  }
  useEffect(()=>{
   fetchsaved ()
  },[])
  return (
    <div>
      <h1>0 Saved</h1>

      {/* use Search grid for showing it  */}
    </div>
  )
}

export default Saved
