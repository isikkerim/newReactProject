
import React from 'react';
import { useState, useEffect } from 'react';
// import Navbar from './Components/Navbar';

import {


  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import Body from './Components/Body';
import CardDetails from './Components/CardDetails';




const App = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3004/result')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log(posts);

  return (
    <Router> <Routes>
    <Route exact path="carddetay" element={ <CardDetails/>}/>
   
    {/* <Route exact path="/" element={ <Body post={posts} />}/> */}
    <Route exact path="/" element={ <Body post={posts} />}/>
  
    {/* <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
    <Route path="*" element={<NotFound/>}/> */}
  </Routes>
    
  </Router>





   

    
    
   


   

  );
}

export default App;
