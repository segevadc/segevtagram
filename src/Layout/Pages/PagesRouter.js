import {Switch, Route} from "react-router-dom";
import {PostPage} from "./Post/PostPage";
import Feed from "./Feed/Feed";

export const PagesRouter = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Feed/>
            </Route>
            <Route path="/about">
                <div/>
            </Route>
            <Route path="/post">
                <PostPage/>
            </Route>
            {/*<Route path="/place">
                    <Po />
                </Route>*/}
        </Switch>
    )
}