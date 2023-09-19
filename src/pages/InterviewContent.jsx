import React, { useEffect, useState }  from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import "./css/Main.css"

import InterviewPage from './InterviewPage';

const InterviewContent = () => {
    const dispatch = useDispatch();
    const job = useSelector(state => state.job);
    const [question, setQuestion] = useState("");

    const getQuestion = () => {
        const options = {
            method : 'GET',
            url: 'http://130.162.157.252:8080/interviewers/' + job
        };
       axios(options).then(response => {
            setQuestion(response.data.data[0]);
            dispatch({type: "QUESTION", payload: question})
        }).catch(response => {
            console.log(response.response);
        })
    }

    useEffect(() => {
        console.log(job);
        getQuestion();
    }, [])

    return (
        <>
        <InterviewPage 
        question = {question}
        interviewContent = {job}
        />
        </>
      );
}

export default InterviewContent;