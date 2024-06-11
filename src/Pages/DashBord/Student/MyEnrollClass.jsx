import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { Link } from "react-router-dom";


const MyEnrollClass = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth();


    const { data: myClassEnroll =[] , isLoading, refetch } = useQuery({
      queryKey: ['myClassEnroll'],
      queryFn: async () => {
        const { data } = await axiosSecure.get(`/myClassEnroll`);
        return data;
      },
    })


    return (
        <div>
         <h1>{myClassEnroll.length}</h1>
            <SectionTitle heading='My Enroll Class'> </SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    myClassEnroll.map(myClassEnrolls => <div key={myClassEnrolls._id} className="card w-96 mx-auto bg-base-100 shadow-xl">
           
                        <figure className="px-10 pt-10">
                          <img src={myClassEnrolls.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                          <h1 className="text-xl font-bold "> Title: <span className="text-xl font-normal">{myClassEnrolls.title}</span></h1>
                          <h2 className="card-title"> Techer Name: {myClassEnrolls.name}
                          </h2>      
                          <div className="card-actions w-full ">
                            <Link to={`/dashboard/enrollDetails/${myClassEnrolls._id}`}><button className="btn bg-gray-300 w-1/3  mx-auto mt-4">Continue</button></Link>
                          </div>
                        </div>
                      </div>)
                }
            </div>
           <h1>my Enroll className</h1> 
        </div>
    );
};

export default MyEnrollClass;