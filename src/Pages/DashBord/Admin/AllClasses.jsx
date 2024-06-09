import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import AllClassRow from "./AllClassRow";
import LoadingSpiner from "../../../Shared/LoadingSpinder/LoadingSpiner";


const AllClasses = () => {
    const axiosSecure = useAxiosSecure();
    const {
        data: allClass = [],
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ['allClass'],
        queryFn: async () => {
          const { data } = await axiosSecure(`/allClass`)
          return data
        },
      })

      if(isLoading) return <LoadingSpiner></LoadingSpiner>


    return (
        <>
        
        <div className='container mx-auto px-4 sm:px-8 '>
            
          <SectionTitle heading={`All Class : ${allClass.length}`} ></SectionTitle>
          <div className='py-8 '>
            <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto '>
              <div className='inline-block min-w-full shadow rounded-lg overflow-hidden '>
                <table className='min-w-full leading-normal '>
                  <thead className=" bg-blue-400">
                    <tr className="">
                      <th>
                        #
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                       Image
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Title
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Email
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                       Short Description
                      </th>
                     
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                       Approved
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Reject
                      </th>
  
                    </tr>
                  </thead>
                  <tbody>
                    {
                        allClass.map((allClasses, index)=>(
                            <AllClassRow key={allClasses._id} allClasses={allClasses} index={index} refetch={refetch} ></AllClassRow>
                        ))
                    }
                 
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default AllClasses;