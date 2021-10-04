import "./Home.css"
import {useHistory} from "react-router-dom";
import {useState} from "react";
import {Form, Icon} from "semantic-ui-react";
import LoginForm from "./LoginForm";

const Home = () => {

    const history = useHistory();


    return <div className="landingView">
        <div className="home-grid searchGrid">
            <div className="searchText">
                <label>be </label> <strong>Simple,</strong>
                <br/>
                <label> be </label> <strong>Social.</strong>
                <LoginForm style={{height: "auto"}}/>
            </div>
            {/*  <Form onSubmit={onSearch}>
                <Form.Input
                    className='searchInput'
                    size='big'
                    onChange={(e, data) => setInputText(data.value)}
                    icon={<Icon
                        onClick={onSearch}
                        name='search' inverted
                        circular
                        link
                    />}
                    placeholder={SEARCH_LABEL}
                />
            </Form>*/}
        </div>
        <div className="home-grid imageGrid">
        </div>
    </div>;
}
export default Home
