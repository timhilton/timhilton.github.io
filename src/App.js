import React, { Component } from 'react';

//react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css';
import './index.scss'
import Home from './components/Home.jsx';
import Portfolio from "./components/Portfolio.jsx";
import Skills from "./components/Skills.jsx";

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
						<Route path="/portfolio" element={<Portfolio/>} />
						<Route path="/skills" element={<Skills/>} />
					</Routes>
				</Router>
            </div>
        );
    }
}

export default App;
