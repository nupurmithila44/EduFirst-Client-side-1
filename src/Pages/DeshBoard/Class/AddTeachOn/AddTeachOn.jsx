import { useForm } from "react-hook-form";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAuth from "../../../../Hook/useAuth";


const AddTeachOn = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth()
    console.log(user)
     const onSubmit = async (data) => {
        
       console.log(data)
    }
    return (
        <div>
            <SectionTitle heading='Teach On From'></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe Name:</span>
                        </div>
                        <input type="text" placeholder="Type here"  {...register("name", { required: true })} className="input input-bordered w-full " />
                    </label>
                    <div className=" mb-5">
                        <label className="label">
                            <span className="text-xl"> photoUrl:</span>
                        </label>
                        <input type="text" value={user?.photoURL} {...register("photo", { required: true })} name="photo" placeholder="enter description" className="input input-bordered w-full" id="" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" value={user?.email} {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" required />

                    </div>
                    <div className="flex gap-5">
                        {/* select  */}
            
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Create an experience </span>
                            </div>
                            <select {...register('option', { required: true })} className="select select-bordered w-full ">
                                <option disabled selected>Select a options</option>
                                <option value="beginner">beginner</option>
                                <option value="experienced">experienced</option>
                                <option value="mid-level">mid-level</option>
                            </select>
                        </label>
                        {/* select category  */}
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select {...register('category', { required: true })} className="select select-bordered w-full ">
                                <option disabled selected>Select a category</option>
                                <option value="web development">web development</option>
                                <option value="digital marketing">digital marketing</option>
                                <option value="User Experience (UX) Design">User Experience (UX) Design</option>
                                <option value="Search Engine Optimization">Search Engine Optimization</option>
                                <option value="E-commerce Development">E-commerce Development</option>
                            </select>
                        </label>
                    </div>

                    {/* file input */}
                    {/* <div className="form-control w-full my-6">
                        <input type="file" {...register("image")} className="file-input file-input-bordered w-full max-w-xs" />
                    </div> */}

                    <button className="btn">
                        ADD Item <FaUtensils></FaUtensils>

                    </button>


                </form>
            </div>
        </div>
    );
};

export default AddTeachOn;