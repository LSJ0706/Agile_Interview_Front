import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Spinner from "../component/Spinner";
import "./css/Main.css"

import Button from "../component/Button";

const InterviewPage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState('');


  const onClick = () => {
    dispatch({type: "ANSWER", payload: answer})
    navigate('/better');
  }

    return (
        <>
        {props.question.length === 0 ? 
        <div> <Spinner /> </div> : 
        <div className="question"> {props.question} </div>}
        <textarea className="ans_input_box" onChange=(e) => {
    setAnswer(e.target.value);
}/>
        <Button name="확인" onClick={onClick} inputLen = {answer.length}/>
        
        </>
      );
}

export default InterviewPage;
