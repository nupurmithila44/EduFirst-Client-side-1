import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        console.log(data)   
        signInUser(data.email, data.password) 
        .then(result=>{
          const loggedUser = result.user;
          console.log(loggedUser)
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

                {/* <input type="password" {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                })} name="password" placeholder="password" className="input input-bordered" required />

                {errors.password?.type === "required" && <p className="text-red-600">password is required</p>}
                {errors.password?.type === "minLength" &&
                  <p className="text-red-600">password must be 6 character</p>
                }
                {errors.password?.type === "maxLength" &&
                  <p className="text-red-600">password must be 20 character</p>
                }
                {errors.password?.type === "pattern" &&
                  <p className="text-red-600">password must have Uppercaseone lower case.One number and one special character.</p>
                } */}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign In" />
              </div>
            </form>
            <p className='text-center pb-4'><small>New Here ?</small><Link to="/signUp">Create an account</Link></p>
             {/* <SocialLogin></SocialLogin> */}
          </div>
        </div>
      </div>
    );
};

export default SignIn