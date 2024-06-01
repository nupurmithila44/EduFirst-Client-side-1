import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const SignUp = () => {
  const {createUser} = useContext(AuthContext);
  console.log(createUser)
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        console.log(data) 
        createUser(data.email, data.password)  
        .then(result =>{
          const loggedUser = result.user;
          console.log(loggedUser)
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
                {errors.photoUrl && <span className="text-red-500">name is required</span>}
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
                <input className="btn btn-primary" type="submit" value="Sign Up" />
              </div>
            </form>
            <p className='text-center pb-4'><small>New Here ?</small><Link to="/signIn">Create an account</Link></p>
             {/* <SocialLogin></SocialLogin> */}
          </div>
        </div>
      </div>
    );
};

export default SignUp;