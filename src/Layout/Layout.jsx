import {Header} from './Header/Header';
/*
import {PagesRouter} from "./Pages/PagesRouter";
*/
import {BrowserRouter as Router} from "react-router-dom";
import Feed from "./Pages/Feed/Feed";

export const Layout = () => {
    return <Router>
        <Header/>
        <Feed/>
        {/*        <PagesRouter/>*/
        }
    </Router>
}

