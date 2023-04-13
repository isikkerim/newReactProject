import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
function CardDetay() {
    const location = useLocation();
    const  {data}  = location.state;
  return (<div>

  <Navbar/>
  sadfg
  <p>{data.id}
</p>

<p>{data.type}
</p>
    
<p>{data.director}
</p>
<p>{data.summary}
</p>
  
<p>{data.name}
</p>
  
  </div>);
}
export default CardDetay;