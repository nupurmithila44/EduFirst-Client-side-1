import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hook/useAuth";
import useAxiosPblic from "../../../Hook/useAxiosPublic";


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
        <div>
            {
                allClassCard.map(allClass =><div key={allClass._id} className="card w-96 bg-base-100 shadow-xl">
           
                    <figure className="px-10 pt-10">
                      <img src={allClass.image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">
                        {allClass.title}
                      </h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div> )
            }
            
        </div>
    );
};

export default AllClassCard;