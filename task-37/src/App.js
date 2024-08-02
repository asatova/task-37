import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
    state = {
        firstName: "",
        email: "",
        message: "",
        nativeLanguage: "",
    };

    handleValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    validateInput = (e) => {
        if (e.target.value.length < 4) {
            alert("4 tadan kop harf kiriting");
        }
    };

    render() {
        const { firstName, email, message, nativeLanguage } = this.state;
        return (
            <div className="container">
                <form>
                    <div>
                        <label htmlFor="firstName">First name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={firstName}
                            onChange={this.handleValue}
                            onBlur={this.validateInput}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={this.handleValue}
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea
                            className="form-control"
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            value={message}
                            onChange={this.handleValue}
                        />
                    </div>
                    <div>
                        <label htmlFor="nativeLanguage">Native Language</label>
                        <select
                            className="form-control"
                            name="nativeLanguage"
                            id="nativeLanguage"
                            value={nativeLanguage}
                            onChange={this.handleValue}
                        >
                            <option value="">Select a language</option>
                            <option value="uz">Uzbek</option>
                            <option value="ru">Russian</option>
                            <option value="eng">English</option>
                        </select>
                    </div>
                </form>
            </div>
        );
    }
}

export default App;
