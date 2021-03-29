import React, { useState } from 'react';
import './signup.css'


function Signup(props) {
    const [userInfo, setUserInfo] = useState({
        fullName: '',
        email: '',
        Password: '',
        ConfirmPassword: '',
    });


    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    const { fullName, email, Password, ConfirmPassword } = userInfo 
    return (
        // <div>
        //     <input placeholder='Full Name' required  className='form-control' onChange={handleChange} name="fullName" value={fullName} />
        //     <input placeholder='Email Address' required className='form-control' onChange={handleChange} name="email" value={email} />
        //     <input placeholder='Enter Password' required className='form-control' onChange={handleChange} name="password" value={Password} />
        //     <input placeholder='Confirm your Password' required className='form-control' onChange={handleChange} name="confirmpassword" value={ConfirmPassword} />
        //     <button className='form-control'> Sign in</button>
        // </div>
        <div>
            <div id="SIGN_IN">
                <svg class="Rectangle_34_di">
                    <rect id="Rectangle_34_di" rx="0" ry="0" x="0" y="0" width="1920" height="1200">
                    </rect>
                </svg>
                <div id="Group_9_dj">
                    <img id="Grey_Velvet_Logo_FINAL_2_dk" src="Grey_Velvet_Logo_FINAL_2_dk.png" srcset="Grey_Velvet_Logo_FINAL_2_dk.png 1x, Grey_Velvet_Logo_FINAL_2_dk@2x.png 2x" />
			
	            </div>
                    <svg class="Rectangle_28_dl">
                        <rect id="Rectangle_28_dl" rx="0" ry="0" x="0" y="0" width="1920" height="1">
                        </rect>
                    </svg>
                    <div id="SIGN_IN_dm">
                        <span>SIGN IN</span>
                    </div>
                    <div onclick="application.goToTargetView(event)" id="SIGN_UP_dn">
                        <span>SIGN UP</span>
                    </div>
                    <svg class="Rectangle_29_do">
                        <rect id="Rectangle_29_do" rx="1" ry="1" x="0" y="0" width="388" height="2">
                        </rect>
                    </svg>
                    <svg class="Rectangle_30_dp">
                        <rect id="Rectangle_30_dp" rx="2.5" ry="2.5" x="0" y="0" width="166" height="5">
                        </rect>
                    </svg>
                    <svg class="Rectangle_31_dq">
                        <rect id="Rectangle_31_dq" rx="0" ry="0" x="0" y="0" width="1000" height="120">
                        </rect>
                    </svg>
                    <svg class="Rectangle_32_dr">
                        <rect id="Rectangle_32_dr" rx="0" ry="0" x="0" y="0" width="1000" height="120">
                        </rect>
                    </svg>
                    <svg class="Rectangle_33_ds">
                        <rect onclick="application.goToTargetView(event)" id="Rectangle_33_ds" rx="0" ry="0" x="0" y="0" width="1000" height="120">
                        </rect>
                    </svg>
                    <div onclick="application.goToTargetView(event)" id="SIGN_IN_dt">
                        <span>SIGN IN</span>
                    </div>
                    <div id="Email_Address_du">
                        <span>Email Address</span>
                    </div>
                    <div id="Password">
                        <span>Password</span>
                    </div>
                    <div onclick="application.goToTargetView(event)" id="Group_11">
                        <div id="Dont_have_an_account">
                            <span>Don’t have an account?</span>
                        </div>
                        <svg class="Rectangle_35">
                            <rect id="Rectangle_35" rx="0" ry="0" x="0" y="0" width="308" height="1">
                            </rect>
                        </svg>
                    </div>
                    <div onclick="application.goToTargetView(event)" id="Group_12">
                        <div id="Forgot_Password">
                            <span>Forgot Password?</span>
                        </div>
                        <svg class="Rectangle_36">
                            <rect id="Rectangle_36" rx="0" ry="0" x="0" y="0" width="237" height="1">
                            </rect>
                        </svg>
                    </div>
                </div>
        </div>
        
    );
}

export default Signup;