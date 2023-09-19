import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector} from "react-redux";
import axios from 'axios';
import "./css/Main.css"

import Spinner from "../component/Spinner";
import Button from "../component/Button";

const BetterAnswer = () => {
    const navigate = useNavigate();
    const qusetion = useSelector(state => state.qusetion);
    const answer = useSelector(state => state.answer);

    const [betterAns, setBetterAns] = useState('');
    

    const getBetterAns = () => {
        const options = {
            method : 'GET',
            url: 'http://130.162.157.252:8080/interviewers/better-answer?question=' + qusetion + "&answer=" + answer
        };
       axios(options).then(response => {
        setBetterAns(response.data.data.message);
        }).catch(response => {
            console.log(response);
        })
    }


    const FollowOnClick = () => {
        navigate('/follow')
      }

      const NextOnClick = () => {
        navigate('/interview')
      }

      useEffect(() => {
        getBetterAns();
    }, [])

    return (
        <>
        <div className="Question_tmp">{qusetion}</div>
        <div className="ans_tmp">A. {answer}</div>
        {betterAns.length === 0 ? 
        <div> <Spinner /> </div> : 
        <div className="better_ans">더 좋은 답변 : {betterAns}</div>}
        <div className="btn_box">
          <Button name="꼬리 질문" onClick={FollowOnClick}/>
          <Button name="다음 질문" onClick={NextOnClick}/>
        </div>
        
        </>
      );
}

export default BetterAnswer;