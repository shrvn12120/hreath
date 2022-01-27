import React from 'react'
import './Home.css'
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div className='hero' id='home'>
            <div className='content'>
                <p>In a paradise state of mind</p>
                <Link className='button'
              to="explore"
              spy={true}
              smooth={true}
              offset={-1}
              duration={500}
             >explore</Link>
               
            </div>
        </div>
    )
}

export default Home
