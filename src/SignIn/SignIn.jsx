import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Component/SectionTitle/SocialLogin/SocialLogin";


const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  
    const { register, handleSubmit,  formState: { errors } } = useForm();

    
    const onSubmit = data => {
        console.log(data)   
        signInUser(data.email, data.password) 
        .then(result=>{
          const loggedUser = result.user;
          console.log(loggedUser)
          Swal.fire({
            title: "user sign In successful",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
          navigate(location?.state ? location.state : "/");
        })   
      };

    return (
        <div className="hero min-h-72 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className=" w-full  shadow-2xl bg-base-100">
            <h1 className="text-3xl text-blue-900 font-bold text-center mt-4">Sign In From</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                <input type="password" {...register("password", { required: true })}  name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign In" />
              </div>
            </form>
            <p className='text-center pb-4'><small>New Here ?</small><Link to="/signUp">Create an account</Link></p>
             <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    );
};

export default SignIn