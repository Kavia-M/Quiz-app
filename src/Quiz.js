import React, {useState,useEffect} from "react";
import Footer from './Components/Footer/Footer.js'
import './App.css';
import fire from './fire'
import {Link} from "react-router-dom";
import useLocalStorage from "./useLocalStorage";
//import ReactNotification , {store} from 'react-notifications-component';

function Quiz() {
  const [q, setQ] = useState([]);

  const setfunction = async (value) =>  {
      await setQ(value);
      console.log(q);
  }
  const [index,setIndex] = useLocalStorage("index",{});
  useEffect(() => {
    fire.database().ref().on("value", (snapshot) =>{
       const val = snapshot.val();
       console.log(val);

       setfunction(val.questions);
       console.log(val.questions);
     })
  },[]);
  
  return ( 
    <div className = "App-header" padding = "0%" width="100vw">
        <button className = "Button" > 
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={'/addquiz'}>+</Link></button>
        {q.map((quiz,ind) =>
        <span padding="10%">
          <button class="box">
              <Link onClick={function(){setIndex(ind)}} style={{ color: 'inherit', textDecoration: 'inherit'}} to={'/questionpage'}>
                  {quiz.name}
              </Link>
          </button><br/><br/>
        </span>)}
    </div>
);
}

export default Quiz;
