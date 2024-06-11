import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hook/useAuth";
import useAxiosPblic from "../../../Hook/useAxiosPublic";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";


const AllClassCard = () => {

   
    const axiosPublic = useAxiosPblic();
   



    const { data: allClassCard =[] , isLoading, refetch } = useQuery({
      queryKey: ['allClassCard'],
      queryFn: async () => {
        const { data } = await axiosPublic.get(`/allClassCard/accepted`);
        return data;
      },
    })
    console.log(allClassCard)

    return (
        <div className="space-y-5">
          <SectionTitle heading='All Class'></SectionTitle>
            {
                allClassCard.map(allClass =><div key={allClass._id} className="card w-2/5 mx-auto bg-base-100 shadow-xl">
           
                    <figure className="px-10 pt-10">
                      <img src={allClass.image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h1 className="text-xl font-bold ">Name: <span className="text-xl font-normal">{allClass.name}</span></h1>
                      <h2 className="card-title">
                        {allClass.title}
                      </h2>
                      <p className="text-sm font-bold">Description:  <span className="text-sm font-normal">{allClass.description}</span></p>
                      <div className="divider"></div>
                      <div className="flex justify-between w-full">                    
                        <p className="text-sm font-bold">Price: <span className="text-sm font-normal">{allClass.price}</span></p>
                        <p className="text-sm font-bold">Total Enrollment: <span className="text-sm font-normal">{allClass.enrollment}</span></p>
                      </div>
                      <div className="card-actions w-full ">
                        <Link to={`/allClassDetails/${allClass._id}`}><button  className="btn bg-blue-300 w-full mx-auto mt-4">Enroll</button></Link>
                      </div>
                    </div>
                  </div> )
            }
            
        </div>
    );
};

export default AllClassCard;