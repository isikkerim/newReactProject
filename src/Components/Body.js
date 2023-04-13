import React from "react";
import Card from "./Card";
import Navbar from './Navbar'



function Body(props){
    
   


    console.log("props.postprops.postprops.postprops.postprops.postprops.postprops.postprops.postprops.post");
    console.log(props.post); 
    return(
<div>
<Navbar/>
  
<div className="container text-center">
  <div className="row justify-content-between">
    
    <div className="col ">
     <div className="continer  my-4">


     <Card info={props.post}/>


     </div>
    </div>
    
  </div>

</div>

</div>

    )


    
}

export default Body;