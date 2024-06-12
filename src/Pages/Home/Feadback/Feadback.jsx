import { useQuery } from "@tanstack/react-query";
import useAxiosPblic from "../../../Hook/useAxiosPublic";
import useAuth from "../../../Hook/useAuth";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";


const Feadback = () => {
    const axiosPublic = useAxiosPblic();
    const {user} = useAuth()




    const { data: feadback = [], isLoading, refetch } = useQuery({
        queryKey: ['feadback'],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/feadback`);
            return data;
        },
    })
    console.log(feadback)

    return (
        <div className="container mx-auto">
            <SectionTitle heading=''></SectionTitle>
            {
                feadback.map(feadbackAssign => <section key={feadbackAssign._id} className="dark:bg-gray-100 dark:text-gray-800 mb-9">
                   
                    <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold">Feadback Review</h1>
                        <div className=" w-20 outline-none sm:w-32  m-3 mx-auto  ">
                            <img className="rounded-full " src={user?.photoURL} alt="" /></div>
                            <h1 className="text-xl  font-bold">Name: {user?.displayName}</h1>

                        <h1 className="text-4xl leading-none sm:text-2xl">{feadbackAssign.description}
                        </h1>
                     
                    </div>
                </section>)
            }


        </div>
    );
};

export default Feadback;