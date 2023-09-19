import React, { useEffect, useState }  from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import "./css/Main.css"
import InterviewPage from './InterviewPage';

const FollowQuestion = () => {
    

    const job = useSelector(state => state.job);
    const qusetion = useSelector(state => state.qusetion);
    const answer = useSelector(state => state.answer);
    

    let [followQuestion, setFollowQuestion] = useState('');

    const getFollowQuestion = () => {
        const options = {
            method : 'GET',
            url: 'http://130.162.157.252:8080/interviewers/follow-up-questions?question='+ qusetion + "&answer=" + answer
        };
       axios(options).then(response => {
        setFollowQuestion(response.data.data);
        }).catch(response => {
            console.log(response);
        })
    }

    useEffect(() => {
        getFollowQuestion();
    }, [])

    return (
        <>
        <InterviewPage 
        question = {followQuestion}
        interviewContent = {job}
        />
        </>
      );
}

export default FollowQuestion;