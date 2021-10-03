import {Header} from './Header/Header';
import {BrowserRouter as Router} from "react-router-dom";
import {PagesRouter} from "./Pages/PagesRouter";
import "./Layout.css"

export const Layout = () => {
    return <Router>
        <Header/>
        <div className={"con"}>
            <PagesRouter/>
        </div>
    </Router>
}

