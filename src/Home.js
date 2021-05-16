import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";

import Footer from './Components/Footer/Footer.js'
export default function Home() {
    return(
        <div>HOME PAGE
            <Link to={'/quiz'}> Click here to go to quiz page</Link>
            <Footer/>
        </div>

    );
}