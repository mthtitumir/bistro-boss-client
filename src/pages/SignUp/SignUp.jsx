import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result=>{
            console.log(result.user);
            updateUser(data.name, data.photo)
            .then(() => {
                console.log("profile update");
                Swal.fire({
                    icon: 'success',
                    title: 'Register Successful'
                })
                navigate('/');

                reset();
            }).catch((error) => {
                console.log(error);
            });
        })
        
    };
    


    return (
        <>
            <Helmet>
                <title>SignUp | Bistro</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="type" name='name' {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} placeholder="PhotoURL" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' {...register("password", {
                                    required: true,
                                    maxLength: 20,
                                    minLength: 6,
                                    pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).*$/
                                })} className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className='text-red-600'>This field is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-600'>Password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className='text-red-600'>Password must be less than 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-600'>Password must have each of one uppercase, lowercase, number and special character</span>}

                            </div>

                            <div className="form-control mt-6">
                                <input type='submit' className="btn btn-primary" value="SignUp" />
                            </div>
                        </form>
                        <p className='px-3 mx-auto mb-5 font-semibold'>New Here? <Link className='text-sky-800' to='/signup'>Register Now?</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;