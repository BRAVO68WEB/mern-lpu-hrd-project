import React from 'react';
import './css/home.css';
import logo from './img/logo.png'




function Home(){
    return (
        <div>
    <div class="firstSection background">
        <div class="main-box">
            <div class="firstHalf">
                <p class="text-big">Your doctor your treatment</p>
                <div class="text-small">
                    Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.
                    <div class="buttons">
                        <button class="btn">Sign in</button>
                        <button class="btn">Sign up</button>
                    </div>
                </div>
            </div>
            <div class="secondHalf">
                <img src={logo} alt="logoImage" />
            </div>
        </div>
    </div>
        </div>
    );
    
}

export default Home