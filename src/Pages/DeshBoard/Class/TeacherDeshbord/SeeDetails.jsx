import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import LoadingSpiner from "../../../../Shared/LoadingSpinder/LoadingSpiner";
import { useParams } from "react-router-dom";
import useAxiosPblic from "../../../../Hook/useAxiosPublic";


const SeeDetails = () => {
    // const axiosSecure = useAxiosSecure();
    const axiosPublic=useAxiosPblic();
    const {id} = useParams();

    const { data: tech =[] , isLoading } = useQuery({
        queryKey: ['tech', id ],
        queryFn: async () => {
          const { data } = await axiosPublic.get(`/tech/${id}`);
          return data;
        },
      })
      console.log(tech)
    
      if (isLoading) return <LoadingSpiner></LoadingSpiner>
    return (
        <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
        <div className="container mx-auto space-y-12">
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                <img src="https://source.unsplash.com/640x480/?1" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                    <span className="text-xs uppercase dark:text-gray-600">Join, it is free</span>
                    <h3 className="text-3xl font-bold">We are not reinventing the wheel</h3>
                    <p className="my-6 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                    <button type="button" className="self-start">Action</button>
                </div>
            </div>
        </div>
    </section>
    );
};

export default SeeDetails;