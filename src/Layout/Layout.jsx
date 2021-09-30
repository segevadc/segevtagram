import {Header} from './Header/Header';
/*
import {PagesRouter} from "./Pages/PagesRouter";
*/
import {BrowserRouter as Router} from "react-router-dom";
import Post from "./Pages/Post/Post";

export const Layout = () => {
    return <Router>
        <Header/>
        <Post id={1}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              author="Itay Sadeh"
              url="https://react.semantic-ui.com/images/avatar/large/matthew.png"
              time="29/9/21 19:19"
              likes={22} comments_counter={2}/>
        {/*        <PagesRouter/>*/
        }
    </Router>
}

