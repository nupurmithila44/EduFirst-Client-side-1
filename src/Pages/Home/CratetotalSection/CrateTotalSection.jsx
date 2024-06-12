import { useQuery } from "@tanstack/react-query";
import useAxiosPblic from "../../../Hook/useAxiosPublic";
import img from '../../../assets/HomePage/benner1.jpg'


const CrateTotalSection = () => {
   const axiosPublic = useAxiosPblic();


    const { data: totalCollection = [], isLoading, refetch } = useQuery({
        queryKey: ['totalCollection'],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/totalCollection`);
            return data;
        },
    })
    console.log(totalCollection)


    return (
        <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
        <div className="container mx-auto space-y-12">
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                <img src={img} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                <div className="flex flex-col justify-center space-y-5 flex-1 p-6 dark:bg-gray-50">
                <h3 className="text-3xl font-bold"># Total User Card: ({totalCollection?.userResult})</h3>
                    <h3 className="text-3xl font-bold"># Total classes:({totalCollection?.classResult})</h3>
                    <h3 className="text-3xl font-bold"> # Total enrollment: ({totalCollection?.enrollresult})</h3>

                </div>
            </div>
        
        </div>
    </section>
    );
};

export default CrateTotalSection;