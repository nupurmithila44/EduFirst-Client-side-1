

import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPblic from "../../../Hook/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";

const image_host_key=import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_host_api=`https://api.imgbb.com/1/upload?key=${image_host_key}`

const AddClasses = () => {
    const {user} = useAuth();
  
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPblic();
    const navigate = useNavigate()


    const onSubmit = async (data) => {
        console.log(data);  
       
        const techer = {
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL
        }
        const imageFile = {image: data.image[0]}
        console.log(imageFile)
        const res = await axiosPublic.post(image_host_api, imageFile, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log(res)
        if(res.data.success){
            const addClass = {
                title: data.title,
                category: data.category,
                price: parseFloat(data.price),
                name: data.name,
                email: data.email,
                image: res.data.data.display_url,
                description: data.description,
                status : 'pending',
                techer: techer
               
            }
            const postClass = await axiosSecure.post('/class', addClass);
            console.log(postClass)
            if(postClass.data.insertedId){
                reset()
                // show success popup
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} add menu Items`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate("/dashboard/myClass")

            }
        }
       
       
      };
    return (
        <div className="my-10">
            <div className="">
                <h1 className="text-2xl text-center font-bold">Add class</h1>
                <div className="px-2 py-2  bg-gray-200 lg:w-[700px] w-[300px]  mx-auto mt-4 border-blue-600 " >
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="">
                            <label className="label">
                                <span className="text-xl">title:</span>
                            </label>
                            <input type="text" {...register("title", { required: true })} name="title" placeholder="enter title" className="input input-bordered w-full" id="" />
                        </div>
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
                        <div className="">
                            <label className="label">
                                <span className="text-xl"> Name :</span>
                            </label>
                            <input type="text"  {...register("name", { required: true })} name="name" placeholder="enter Name" className="input input-bordered w-full" id="" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" defaultValue={user?.email}  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" required />

                        </div>
                        <div className="">
                            <label className="label">
                                <span className="text-xl">price:</span>
                            </label>
                            <input type="number" {...register("price", { required: true })} name="price" placeholder="enter price" className="input input-bordered w-full" id="" />
                        </div>
                        <div className="">
                            <label className="label">
                                <span className="text-xl"> description :</span>
                            </label>
                            <input type="text" {...register("description", { required: true })} name="description" placeholder="enter description" className="input input-bordered w-full" id="" />
                        </div>
                  
                        <div className=" mb-5">
                            <label className="label">
                                <span className="text-xl"> photoUrl:</span>
                            </label>
                            <input type="file"  {...register("image")} name="image" placeholder="enter description" className="input input-bordered w-full" id="" />
                        </div>
                        {/* img mark  */}
                        <div>
                            <input type="submit" value="add class" className="input bg-slate-500 input-bordered w-full" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddClasses;