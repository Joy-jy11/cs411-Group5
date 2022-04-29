/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React from "react";
import axios from "axios";
import { useState } from 'react'
import {findAllByAltText} from "@testing-library/react";



class App extends React.Component {
    state = {
        details: [],
        movie: "",
    };


    componentDidMount() {
        let data;

        axios
            .get("http://localhost:8000/wel/")
            .then((res) => {
                data = res.data;
                this.setState({
                    details: data,
                });
            })
            .catch((err) => {});
    }



        renderSwitch = (param) => {
        switch (param + 1) {
            case 1:
                return "primary ";
            case 2:
                return "secondary";
            case 3:
                return "success";
            case 4:
                return "danger";
            case 5:
                return "warning";
            case 6:
                return "info";
            default:
                return "yellow";
        }
    };


    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };


    handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:8000/wel/", {
                name: this.state.movie,
            })
            .then((res) => {
                this.setState({
                    movie: "",
                });
            })
            .catch((err) => {});
    };

      //const sth = axios.get("http://localhost:8000/app/");

    
    render() {
        return (

            <div className="container jumbotron ">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"
                                  id="basic-addon1">
                                {" "}
                                Search{" "}
                            </span>

                        </div>
                        <input type="text" className="form-control"
                               placeholder="Movie you want to search"
                               aria-label="Username"
                               aria-describedby="basic-addon1"
                               value={this.state.movie} name="movie"
                               onChange={this.handleInput}/>
                        </div>


                  <button type="submit" className="btn btn-primary mb-5">
                        Submit
                    </button>

                </form>


                    <hr
                    style={{
                        color: "#000000",
                        backgroundColor: "#000000",
                        height: 0.5,
                        borderColor: "#000000",
                    }}
                 />

                {this.state.details.map((detail, id) => (
                    <div key={id}>
                        <div className="card shadow-lg">
                            <div className={"bg-" + this.renderSwitch(id % 6) +
                                          " card-header"}>Quote {id + 1}</div>
                            <div className="card-body">
                                <blockquote className={"text-" + this.renderSwitch(id % 6) +
                                                   " blockquote mb-0"}>
                                    <h1> {detail.detail} </h1>
                                    <footer className="blockquote-footer">
                                        {" "}
                                        <cite title="Source Title">{detail.name}</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                        <span className="border border-primary "></span>
                    </div>
                ))}



            </div>
        );
    }
}
export default App;