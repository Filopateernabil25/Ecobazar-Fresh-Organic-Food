import React, { useState } from 'react';
import './assets/LoginPage.css'; // Create this CSS file for styling

export default function LoginPage() {
    
    return (
        <div className="signin-container">
            <div className="signin-card">
                <h2 className="signin-title">Sign In</h2>
                <form  className="signin-form">

                    <div className="input-group-2">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                        />
                    </div>

                    <div className="input-group-2 password-wrapper">
                        <input
                            name="password"
                            placeholder="Password"
                            required
                        />
                    </div>

                    <div className="form-utils">
                        <label className="remember-me">
                            <input
                                type="checkbox"
                                name="rememberMe"
                            />
                            <span>Remember me</span>
                        </label>
                        <a href="/forgot-password">Forget Password?</a>
                    </div>

                    <button type="submit" className="login-btn">
                        Login
                    </button>

                    <p className="signup-redirect">
                        Don't have account? <a href="/register">Register</a>
                    </p>
                </form>
            </div>
        </div>
    );
};
