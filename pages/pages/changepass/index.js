import getConfig from 'next/config';
import React, { useContext, useEffect, useRef, useState } from 'react';

const palitpass = () => {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    return (
        <div class="container">
            <div class="img">
                <img src={`${contextPath}/layout/images/forgot.png`} width="300" height="500"/>
            </div>
            <div class="login-content">
                <form action="login.html" method="post">
                    <img src={`${contextPath}/layout/images/logo-dark.svg`}/>
                    <h2 class="title">Motion Detector</h2>
                    <div class="input-div pass">
                    <div class="i"> 
                            <i class="fas fa-lock"></i>
                    </div>
                    <div class="div">
                            <h5>Old Password</h5>
                            <input type="password" class="input" id="password_input" name="password_input"/>
                    </div>
                    </div>

                    <div class="input-div pass">
                    <div class="i"> 
                            <i class="fas fa-lock"></i>
                    </div>
                    <div class="div">
                            <h5>New Password</h5>
                            <input type="password" class="input" id="password_input" name="password_input"/>
                    </div>
                    </div>

                    <div class="input-div pass">
                    <div class="i"> 
                            <i class="fas fa-lock"></i>
                    </div>
                    <div class="div">
                            <h5>Confirm Password</h5>
                            <input type="password" class="input" id="password_input" name="password_input"/>
                    </div>
                    </div>

                    <a href="#" class="btn">SUBMIT</a>
                    <a href="Account.html" class="btn">BACK</a>
                </form>
            </div>
        </div>
    );
};
    

export default palitpass;