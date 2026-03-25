import React from 'react'
import './assets/LoginPage.css'; // Create this CSS file for styling
export default function CreateAcount() {
    return (
        <div className="signin-container">
            <div className="signin-card">
                <h2 className="signin-title">Create Account</h2>
                <form className="signin-form">

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

                    <div className="input-group-2 password-wrapper">
                        <input
                            name="password"
                            placeholder="Confirm Password"
                            required
                        />
                    </div>

                    <div className="form-utils">
                        <label className="remember-me">
                            <input
                                type="checkbox"
                                name="rememberMe"
                            />
                            <span>Accept all terms & Conditions</span>
                        </label>
                    </div>

                    <button type="submit" className="login-btn">
                        Create Account
                    </button>

                    <p className="signup-redirect">
                        Already have account <a href="/login"> Login</a>
                    </p>
                </form>
            </div>
        </div>
    );
}
