import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./css/Main.css"
import Button from "../component/Button";

const MainContent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [job, setJob] = useState("");

    const onChange = (e) => {
       setJob(e.target.value);
    };

    const play = () => {
        dispatch({type: "JOB", payload: job})
        navigate('/interview');
    };

    return (
        <>
        <div className="guide">
            <h7>면접을 볼 직무를 입력하세요.<br />ex. 주니어 백앤드 개발자</h7>
        </div>

        <input className="input_box" onChange={onChange}/> 

        <Button name="면접 보기" onClick={play} inputLen={job.length} />
        </>
      );
}

export default MainContent;