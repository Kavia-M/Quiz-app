import React, {useState,useEffect} from "react";
import Footer from './Components/Footer/Footer.js'
import './App.css';
import fire from './fire'
import {InputGroup} from 'react-bootstrap'; 
import {FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './AddQuiz.css'

export default function AddQuiz() {

 
    const [state,setState] = useState({
        quizname : "",
        question : "",
        a1 : "",
        a2 : "",
        a3 : "",
        a4 : "",
        ans : 0
    })

    const handleClick = async (e) => {
      e.preventDefault();
      var val;
     await fire.database().ref("questions").on("value", (snapshot) =>{
     val = snapshot.val();
     console.log("hi");
      })
   console.log(val);
   var vall = [...val,{
     name : state.quizname,
     ques : [{
       q : state.question,
       a1 : state.a1,
       a2 : state.a2,
       a3 : state.a3,
       a4 : state.a4,
       ans : state.ans
     }]
   }]
      fire.database().ref("questions").set(vall);
      console.log(vall);
      console.log(state);
  }
  return (
    <div className="DIV">
      <InputGroup className="mb-3" size="lg">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl type="text" maxlength="10"
 
      placeholder="quiz name not exceeding 10 characters"
      aria-label = "quizname"
      aria-describedby="basic-addon1"
    />
    </InputGroup>
       <button border = "5px solid" onClick={ e => handleClick(e)}>ADD QUIZ</button>
    </div>
  );

  /*  return(
    <div className="DIV">
    <InputGroup className="mb-3" size="lg">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl type="text" maxlength="10"
      onChange={(event) => {
        setState(
            {
                ...state,
                quizname : event.target.value
            }
            );}}   
      placeholder="quiz name not exceeding 10 characters"
      aria-label = "quizname"
      aria-describedby="basic-addon1"
    />
    </InputGroup>
    <br/>
    <InputGroup size="lg">
    <InputGroup.Prepend> 
      <InputGroup.Text>First Question</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
          onChange={(event) => {
            setState(
                {
                    ...state,
                    question : event.target.value
                }
                );}}  
    as="textarea" aria-label="With textarea" />
  </InputGroup>
  <br/>

  <InputGroup className="mb-3" size="lg">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">1</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl

    onChange={(event) => {
    setState(
        {
            ...state,
            a1 : event.target.value
        }
        );}}      

      type="text"
      placeholder="Option 1"
      aria-label="option1"
      aria-describedby="basic-addon1"
    />
    </InputGroup> 

    <InputGroup className="mb-3" size="lg">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">2</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl           
    onChange={(event) => {
            setState(
                {
                    ...state,
                    a2 : event.target.value
                }
                );}} 
      type="text"
      placeholder="Option 2"
      aria-label="option1"
      aria-describedby="basic-addon1"
    />
    </InputGroup>  

    <InputGroup className="mb-3" size="lg">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">3</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl           
    onChange={(event) => {
            setState(
                {
                    ...state,
                    a3 : event.target.value
                }
                );}} 
      type="text"
      placeholder="Option 3"
      aria-label="option3"
      aria-describedby="basic-addon1"
    />
    </InputGroup>  

    <InputGroup className="mb-3" size="lg">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">4</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl           
    onChange={(event) => {
            setState(
                {
                    ...state,
                    a4 : event.target.value
                }
                );}} 
      type="text"
      placeholder="Option 4"
      aria-label="option4"
      aria-describedby="basic-addon1"
    />
    </InputGroup> 


    <InputGroup className="mb-3" size="lg">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">Correct answer</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl type="number" min="1" max="4" maxlength="1"
      onChange={(event) => {
        setState(
            {
                ...state,
                ans : event.target.value
            }
            );}}   
      placeholder="1, 2, 3 or 4"
      aria-label = "correct answer"
      aria-describedby="basic-addon1"
    />
    </InputGroup>

    <button border = "5px solid" onClick={ e => handleClick(e)}>ADD QUIZ</button>
    
    </div>
    );*/
}