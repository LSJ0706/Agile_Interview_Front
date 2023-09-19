import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainContent from '../pages/MainContent';
import InterviewContent from '../pages/InterviewContent';
import BetterAnswer from'../pages/BetterAnswer';
import FollowQuestion from "../pages/FollowQuestion";

function Routers () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/*" element = {<MainContent/>} />
                <Route path="/interview" element = {<InterviewContent/>} />
                <Route path="/better" element = {<BetterAnswer/>} />
                <Route path="/follow" element = {<FollowQuestion/>} />
            </Routes>
        </BrowserRouter>
    );
}
export default Routers;