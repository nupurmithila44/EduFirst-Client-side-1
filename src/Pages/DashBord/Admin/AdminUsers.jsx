import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import LoadingSpiner from "../../../Shared/LoadingSpinder/LoadingSpiner";
import useAuth from "../../../Hook/useAuth";
import AdminUserRow from "./AdminUserRow";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const AdminUsers = () => {
  const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
  //   Fetch users Data
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await axiosSecure(`/users`)
      return data
    },
  })

  console.log(users)
  if (isLoading) return  <LoadingSpiner></LoadingSpiner>
  return (
    <>
      <div className='container mx-auto px-4 sm:px-8'>  
        <SectionTitle heading='Total User'></SectionTitle>    
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
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
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Role
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Status
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <AdminUserRow key={user?._id} user={user} refetch={refetch} index={index}></AdminUserRow>                  
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default AdminUsers;