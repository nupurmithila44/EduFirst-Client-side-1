import { useForm } from "react-hook-form";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAuth from "../../../../Hook/useAuth";
import useAxiosSecure, { axiosSecure } from "../../../../Hook/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import { toast } from 'react-toastify';

const AddTeachOn = () => {
     const {user, loading} = useAuth();
     const axiosSecure = useAxiosSecure();
    //  const [role, isLoading] = useRole();

     const {mutateAsync} = useMutation({
        mutationFn: async techerData =>{
            const {data}= await axiosSecure.put('/addteach', techerData)
            return data
        },
        onSuccess: () => {
            toast('success, wait for admin aproved')
          
        }
     })
     


    const { register, handleSubmit, reset } = useForm();
     const onSubmit = async (data) => { 
        try{
            await mutateAsync({...data,  role: 'student', status: 'pending', photo: user?.photoURL })
        }
        catch (err){
            console.log(err)
        }
    
       
    }
    return (
        <div className="w-2/4 mx-auto">
            <SectionTitle heading='Teach On From'></SectionTitle>       
            <div className=" w-20 outline-none sm:w-32  m-3 mx-auto  ">
                <img className="rounded-full " src={user?.photoURL} alt="" /></div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text text-xl font-bold"> Name:</span>
                        </div>
                        <input type="text" placeholder="Type here"  {...register("name", { required: true })} className="input input-bordered w-full " />
                    </label>   
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text text-xl font-bold"> Title:</span>
                        </div>
                        <input type="title" placeholder="Type here"  {...register("title", { required: true })} className="input input-bordered w-full " />
                    </label>          
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Email</span>
                        </label>
                        <input type="email" value={user?.email} {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" required />

                    </div>
                 
                    <div className="flex gap-5">
                        {/* select  */}
            
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text text-xl font-bold"> Experience: </span>
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
                                <span className="label-text text-xl font-bold"> Category :</span>
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
               

                    <button  className="btn bg-blue-600 flex mx-auto text-white mb-10">
                        Submit for review <FaUtensils></FaUtensils>
                    </button>
                  


                </form>
            </div>
        </div>
    );
};

export default AddTeachOn;