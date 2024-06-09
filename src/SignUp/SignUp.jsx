import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Component/SectionTitle/SocialLogin/SocialLogin";
import { TbFidgetSpinner } from "react-icons/tb";




const SignUp = () => {
  const { createUser, updateUserProfile , logOut,loading} = useContext(AuthContext);
const navigate = useNavigate();
  // const axiosPublic = useAxiosPblic();

  const { register, handleSubmit,reset, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data)
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        updateUserProfile(data.name, data.photoUrl)
        .then(()=>{
          reset()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/')
         
          logOut()
            .then(()=>{
                navigate('/signIn')
            })
        })
        .catch(error => console.log(error))
      })    

  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold">SignUp now!</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" {...register("name", { required: true })} name="name" placeholder="enter your name" className="input input-bordered" required />
              {errors.name && <span className="text-red-500">name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoUrl</span>
              </label>
              <input type="text" {...register("photoUrl", { required: true })} name="photoUrl" placeholder="enter your photo" className="input input-bordered" required />
              {errors.photoUrl && <span className="text-red-500">PhotoUrl is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" required />
              {errors.email && <span className="text-red-500">email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered" required />

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            {/* <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div> */}
            <div>
            <button
              disabled={loading}
              type='submit'
              className='bg-blue-700 w-full rounded-md py-3 text-white'
            >
              {loading ? (
                <TbFidgetSpinner className='animate-spin m-auto' />
              ) : (
                'Continue'
              )}
            </button>
          </div>
          </form>
          <p className='text-center pb-4'><small>New Here ?</small><Link to="/signIn">Create an account</Link></p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default SignUp;