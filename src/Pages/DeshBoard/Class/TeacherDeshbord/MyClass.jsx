
import useAxiosPblic from "../../../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpiner from "../../../../Shared/LoadingSpinder/LoadingSpiner";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import useAuth from "../../../../Hook/useAuth";
import { key } from "localforage";
import MyCardClass from "./MyCardClass";
import Swal from "sweetalert2";


const MyClass = () => {
     const axiosSecure = useAxiosSecure()
    const {user} = useAuth();
    const axiosPublic = useAxiosPblic()


    const { data: Class =[] , isLoading, refetch } = useQuery({
      queryKey: ['myClass', user?.email],
      queryFn: async () => {
        const { data } = await axiosPublic.get(`/myClass/${user?.email}`);
        return data;
      },
    })
  


  
    if (isLoading) return <LoadingSpiner></LoadingSpiner>


    return (
       <div>
        <SectionTitle heading='My Class'></SectionTitle>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">   
            {
                Class.map(tech =>  <MyCardClass key={tech._id} tech={tech} refetch={refetch} ></MyCardClass>)
            }
        </div>
       </div>
       
    );
};

export default MyClass;