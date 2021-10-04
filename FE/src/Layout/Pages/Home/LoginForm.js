import {Button, Form, Grid, Image, Message, Segment} from "semantic-ui-react";
import {Header} from "../../Header/Header";
import {useHistory} from "react-router-dom";

const LoginForm = () => {
    const history = useHistory();

    const goToFeed = () => {
        history.push(`/feed`)
    };

    return <Grid id="login" textAlign='center' verticalAlign='middle'>
        <Grid.Column style={{maxWidth: 450}}>
  {/*          <Header as='h2' color='teal' textAlign='center'>
                <Image src='/logo.png'/> Log-in to your account
            </Header>*/}
            <Form size='large'>
                <Segment stacked className="login-segment">
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'/>
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                    />

                    <Button className="login-btn" fluid size='large' onClick={() => goToFeed()}>
                        Login
                    </Button>
                </Segment>
            </Form>
            {/*<Message>
                New to us? <a href='#'>Sign Up</a>
            </Message>*/}
        </Grid.Column>
    </Grid>
}

export default LoginForm