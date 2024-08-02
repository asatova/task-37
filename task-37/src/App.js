import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
    state = {
        firsName: "",
    };
    handelValue = (e) => {
        this.setState({
            firstName:e.target.value,
        })
    }
    render() {
        return <div className="container">
            <form>
                <label htmlFor="firstName">First name</label>
                <input
                className="form-control"
                type="text"
                name="firstName"
                id="firstName"
                value={this.state.firstName}
                onChange={this.handelValue}
                />
            </form>
        </div>
    }
}

export  default App