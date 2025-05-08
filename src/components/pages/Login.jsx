import React, { useRef, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase.init';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const emailRef = useRef();
    const navigate = useNavigate();
    const { googleSignIn } = useContext(AuthContext);
    
    const handleLogIn = (e) => {
        e.preventDefault();
    
        const email = e.target.email.value.trim();
        const password = e.target.password.value;
    
        setSuccess(false);
        setError('');
    
        // Input validation
        if (!email || !password) {
            const message = 'Please enter both email and password.';
            setError(message);
            toast.error(message);
            return;
        }
    
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setSuccess(true);
                const user = result.user;
                localStorage.setItem('isLoggedIn', true);
                localStorage.setItem('iceNestUser', JSON.stringify({
                    email: user.email,
                }));
                
                console.log("Login successful:", result.user);
                toast.success("Login successful!");
                navigate('/');
            })
            .catch((error) => {
                toast.error("Invalid email or password.");
                setSuccess(false);
                console.error("Login error:", error);
            });
    };
    
    const handleForgetPassword = () => {
        const email = emailRef.current?.value.trim();
        setError('');

        if (!email) {
            toast.error("Please enter your email address to reset password.");
            return;
        }
        navigate(`/forgot-password?email=${encodeURIComponent(email)}`);

        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.info('Password reset email sent.');
            })
            .catch((error) => {
                console.error("Reset error:", error);
                setError(error.message);
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const loggedInUser = result.user;
                localStorage.setItem('isLoggedIn', true);
                localStorage.setItem('iceNestUser', JSON.stringify({
                    email: loggedInUser.email,
                }));
                toast.success("Logged in with Google!");
                navigate('/');
            })
            .catch((error) => {
                console.error(error);
                setError(error.message);
                toast.error("Google login failed");
            });
    };

    return (
        <>
            <Helmet>
                <title> Login | IceNest</title>
            </Helmet>
            
            <div className='flex justify-center min-h-screen items-center'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className='font-semibold text-center text-2xl pt-8'>Login your account</h1>
                    <div className="card-body">
                        <form onSubmit={handleLogIn} className="fieldset">
                            <label className="label font-semibold ">Email address</label>
                            <input 
                                type="email" 
                                name='email' 
                                ref={emailRef} 
                                className="input bg-base-200" 
                                placeholder="Enter your email address" 
                            />
                            <label className="label font-semibold">Password</label>
                            <input 
                                type="password" 
                                name='password' 
                                className="input bg-base-200" 
                                placeholder="Enter your password" 
                            />
                            <div>
                                <a onClick={handleForgetPassword} className="link link-hover">Forgot password?</a>
                            </div>
                            <button className="btn btn-neutral w-full mt-4">Login</button>
                            
                            {/* Google Sign-In Button */}
                            <button 
                                type="button" 
                                onClick={handleGoogleSignIn} 
                                className="btn btn-outline w-full mt-4"
                            >
                                <FcGoogle size={24} className="mr-2" /> 
                                Login with Google
                            </button>
                            
                            <p className='font-semibold text-center pt-5'>
                                Dont't Have An Account?{' '}
                                <Link to='/register'><span className='text-secondary'>Register</span></Link>
                            </p>
                        </form>
                        {error && <p className='text-red-500 text-center mt-2'>{error}</p>}
                        {success && <p className='text-green-500 text-center mt-2'>User logged in successfully</p>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;