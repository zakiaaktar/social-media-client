import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
//import { useNavigate } from 'react-router-dom';
//import { AuthContext } from '../contexts/UserContext';

const Login = () => {
  const { login } = useContext(AuthContext);


  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  }



  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">


          <div>
            <h1 className='text-5xl font-bold text-purple-500'>Network</h1>
            <p className='mt-5'>Network helps you connect and share with the people in your life.</p>

          </div>


          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn bg-gradient-to-br from-blue-900 to-purple-500 rounded-none" type="submit" value="Login" />
              </div>
              <div>
                <SocialLogin className="form-control mt-6"></SocialLogin>
              </div>
              <p className='text-center'><small>New to Social Media</small> <Link className='text-blue-900 font-bold' to='/register'>Register</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;