import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Footer from './Footer';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { createUser, updateUser, setUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    // Password validation
    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegExp.test(password)) {
      setErrorMessage('Password must have at least one uppercase, one lowercase, and be at least 6 characters long.');
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        return updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({...user, displayName: name, photoURL: photo });
            toast.success("Registration successful!");
            navigate('/login');
          });
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Register | IceNest</title>
      </Helmet>
      <Navbar />
      <div className='flex justify-center min-h-screen items-center'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className='font-semibold text-center text-2xl pt-8'>Register your account</h1>
          <div className="card-body">
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Name</label>
              <input type="text" name="name" className="input" required placeholder="Enter your name" />

              <label className="label">Photo URL</label>
              <input type="text" name="photo" required className="input" placeholder="Photo URL" />

              <label className="label">Email</label>
              <input type="email" name="email" className="input" required placeholder="Enter your email address" />

              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className="input bg-base-200"
                  required
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-xs absolute top-2 right-6"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>

              {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}

              <button type="submit" className="btn btn-neutral mt-4">Register</button>

              <button type="button" className="btn btn-neutral mt-1">
                <FcGoogle size={24} />Login with Google
              </button>

              <p className="font-semibold text-center pt-5">
                Already Have An Account?{' '}
                <Link to="/login"><span className="text-secondary">Login</span></Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
