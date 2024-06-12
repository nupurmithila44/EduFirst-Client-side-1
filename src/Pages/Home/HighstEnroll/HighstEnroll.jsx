import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hook/useAuth";
import useAxiosPblic from "../../../Hook/useAxiosPublic";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";


const HighstEnroll = () => {
    const axiosPublic = useAxiosPblic();
    const { user } = useAuth()

    const { data: hightstEnroll = [], isLoading, refetch } = useQuery({
        queryKey: ['hightstEnroll'],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/hightstEnroll`);
            return data;
        },
    })
    console.log(hightstEnroll)


    return (
        <div className="mb-7">
            <SectionTitle heading='Hightest Enrollment'></SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {
                hightstEnroll.map(hight => <div key={hight._id} className="card  mx-auto w-96 bg-base-100 shadow-xl">
                    <figure><img src={hight.image} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> {hight.title} </h2>
                        <p>{hight.title}</p>
                        <div className="flex justify-between">
                            <p className="text-xl">Price: ${hight.price}</p>
                            <p className="text-xl">Category: {hight.category}</p>
                        </div>
                    </div>
                </div> )
            }
           
          </div>
        </div>
    );
};

export default HighstEnroll;