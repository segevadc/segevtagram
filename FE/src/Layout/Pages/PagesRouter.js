import {Route, Switch} from "react-router-dom";
import {PostPage} from "./Post/PostPage";
import Feed from "./Feed/Feed";
import Home from "./Home/Home";

export const PagesRouter = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/feed">
                <Feed/>
            </Route>
            <Route path="/about">
                <div/>
            </Route>
            <Route path="/post">
                <PostPage/>
            </Route>
        </Switch>
    )
}