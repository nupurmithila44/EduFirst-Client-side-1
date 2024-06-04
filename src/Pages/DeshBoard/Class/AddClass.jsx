import { useForm } from "react-hook-form";


const AddClass = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);  
       
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
                        <div className="">
                            <label className="label">
                                <span className="text-xl"> Name :</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="enter Name" className="input input-bordered w-full" id="" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" required />

                        </div>
                        <div className="">
                            <label className="label">
                                <span className="text-xl">price:</span>
                            </label>
                            <input type="text" {...register("price", { required: true })} name="price" placeholder="enter price" className="input input-bordered w-full" id="" />
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
                            <input type="text" {...register("photo", { required: true })} name="photo" placeholder="enter description" className="input input-bordered w-full" id="" />
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

export default AddClass;