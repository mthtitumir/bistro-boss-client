import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.pathname || "/";


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful'
                })
                navigate(from, {replace: true})
            })
        form.reset();
    }
    const handleValidateCaptcha = event => {
        const captcha_value = captchaRef.current.value;
        if (validateCaptcha(captcha_value)) {
            setDisabled(false);
        } else {
            setDisabled(true);

        }
    }
    return (
        <>
            <Helmet>
                <title>LogIn | Bistro</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input ref={captchaRef} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />
                                <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-3">Validate</button>

                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} type='submit' className="btn btn-primary" value="Login" />
                            </div>
                        </form>
                        <p className='px-3 mx-auto mb-5 font-semibold'>New Here? <Link className='text-sky-800' to='/signup'>Create a new account?</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;