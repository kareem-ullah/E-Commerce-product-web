import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from '../Components/Navbar';
import Login from '../Components/Login';
import { useSelector } from "react-redux";
import '../index.css';

function Home() {
       
    return (
        <div className="container">
        <Login />
       
        </div>
    )
}

export default Home;
