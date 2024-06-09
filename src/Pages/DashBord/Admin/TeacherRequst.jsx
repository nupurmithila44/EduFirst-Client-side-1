import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import LoadingSpiner from "../../../Shared/LoadingSpinder/LoadingSpiner";

import TeacherRequestRow from "./TeacherRequestRow";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";


const TeacherRequst = () => {
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure()
  //   Fetch users Data
  const {
    data: addteach = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['addteach'],
    queryFn: async () => {
      const { data } = await axiosSecure(`/addteach`)
      return data
    },
  })

  console.log(addteach)
  if (isLoading) return <LoadingSpiner></LoadingSpiner>
  return (
    <>
      <div className='container mx-auto px-4 sm:px-8 '>
        <SectionTitle heading='Total Teacher Request'></SectionTitle>
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
                      IMAGE
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      NAME
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      CATEGORY
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      EXPERIENCE
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      STATUS
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      ACTION
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      ACTION
                    </th>

                  </tr>
                </thead>
                <tbody>
                  {
                    addteach.map((addteaches, index) => (
                      <TeacherRequestRow key={addteaches._id} addteaches={addteaches} index={index} refetch={refetch}></TeacherRequestRow>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default TeacherRequst;