import React, { Component } from 'react';

//react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css';
import './index.scss'
import Home from './components/Home.jsx';
import Portfolio from "./components/Portfolio.jsx";
import Sidebar from './components/Sidebar';
import TopNav from "./components/TopNav";
import IconNav from './components/IconNav';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                <div className="content-container">
                <Sidebar />
                <TopNav/>
                    <main className="main">
                        <Routes>
                            <Route exact path="/" element={<Home/>}/>
                            <Route path="/portfolio" element={<Portfolio/>} />
                        </Routes>
                    </main>
                <IconNav />
                </div>
				</Router>
            </div>
        );
    }
}

export default App;
