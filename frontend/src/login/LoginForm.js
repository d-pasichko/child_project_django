//Login Box
import './LoginForm.css';
import React, {Component} from 'react';

class LoginBox extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    submitLogin(e) {
    }

    render() {
        return (
            <form method="post" action="http://localhost:8000/login" className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                        <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon"/>
                    </div>
                    <form>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="Login"/>
                        <input id="password" className="fadeIn third" name="password" placeholder="Password"
                               type="password"/>
                        <button
                            type="button"
                            className="fadeIn fourth"
                            onClick={this
                                .submitLogin
                                .bind(this)}>Login
                        </button>
                    </form>
                    <div id="formFooter">
                        <a className="underlineHover" href="#">Forgot Password?</a>
                    </div>

                </div>
            </form>
        );
    }

}

export default LoginBox;