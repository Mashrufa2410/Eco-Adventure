import React, { useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase.init'; // Make sure to export googleProvider from firebase.init
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth'; // Import this for Google login

const SignUp = () => {
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSignUp = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const terms = e.target.terms.checked;

        setErrorMessage('');
        setSuccess(false);

        if (!terms) {
            setErrorMessage('Please accept the terms and conditions.');
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;


        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setSuccess(true);

                sendEmailVerification(auth.currentUser).then(() => {
                    console.log('Verification email sent');
                });

                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => console.log('User profile updated'))
                    .catch(error => console.error('Profile update error:', error));
            })
            .catch(error => {
                setErrorMessage(error.message);
                setSuccess(false);
            });
    };

    const handleGoogleSignUp = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log('Google SignUp successful:', user);
                setSuccess(true);
            })
            .catch(error => {
                setErrorMessage(error.message);
                setSuccess(false);
            });
    };

    return (
        <div className="card bg-base-100 mx-auto w-full py-7 flex flex-col mb-20 mt-10 max-w-sm shrink-0 shadow-2xl">
            <h3 className="text-3xl ml-4 pl-5 font-bold">Sign Up now!</h3>
            <form onSubmit={handleSignUp} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Password"
                        className="input input-bordered"
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="btn btn-xs absolute right-2 top-12"
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
                <div className="form-control">
                    <label className="label justify-start cursor-pointer">
                        <input type="checkbox" name="terms" className="checkbox" />
                        <span className="label-text ml-2">Accept Terms and Conditions</span>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#03823e] text-white hover:text-black">Sign Up</button>
                </div>
            </form>
            {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}
            {success && <p className="text-green-600 text-center">Sign up successful.</p>}
            <p className="m-2 pl-5">
                Already have an account? <Link to="/login">Login</Link>
            </p>
            
        </div>
    );
};

export default SignUp;