import {Header} from './Header/Header';
/*
import {PagesRouter} from "./Pages/PagesRouter";
*/
import {BrowserRouter as Router} from "react-router-dom";
import Feed from "./Pages/Feed/Feed";

const posts = [
    {
        "id": 1,
        "content": "Helloooooo lksdjkslz skljdfcc ds,cnmdc zs dcmd,. mx m,s.adm ,.mx ,n m,dn, m., na,d bj sa,v nkjln skljd",
        "author": "Itay Sadeh",
        "url": "https://react.semantic-ui.com/images/avatar/large/matthew.png",
        "time": "29/9/21 19:19",
        "comments_counter": 2,
        "likes": 4
    },
    {
        "id": 2,
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "author": "Segev Cohen",
        "url": "https://lh3.googleusercontent.com/proxy/mtlk1CRFCh28dTm22W74qCNBGpUgRYEk-hACfnXBvUxVpzqWr0JGOUlTIsaj2asNN4hg5mnm0nIGRjucf1ZZV7wdHRDajEN8S4xDBnXtPZExSy3Zwek99hhlnrXUWq8bybbpY4Rv7CRveYgIFmgUeTXA4RAdh51WbJ4Gt45BqX1rnIdWqPqw6T3JaJjHTeGR-G09zpm-FiHNv8WxvCedcvOF8-rAYbJYbYvrWkI2CpXXENhrCBVBZnY-JjHzXLFeldYO",
        "time": "27/9/21 19:19",
        "comments_counter": 6,
        "likes": 413
    },
    {
        "id": 3,
        "content": "skd kldsjd lkdj cjsdkhn cknsac jshcjkdjfm fcnn jkjckncnmilj isoncms cjksjc  skljcjks m,snsc smcjion",
        "author": "Jonathan Martens",
        "url": "https://react.semantic-ui.com/images/avatar/large/matthew.png",
        "time": "27/9/21 19:19",
        "comments_counter": 4,
        "likes": 41
    }
]

export const Layout = () => {
    return <Router>
        <Header/>
        <Feed posts={posts}/>
        {/*        <PagesRouter/>*/
        }
    </Router>
}

