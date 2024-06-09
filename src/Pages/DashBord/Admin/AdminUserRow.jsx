import { useState } from "react"
import PropTypes from 'prop-types'

import useAxiosSecure from "../../../Hook/useAxiosSecure"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"
import UpdateUserModal from "../../../Component/Modal/UpdateUserModal"
import useAuth from "../../../Hook/useAuth"


const AdminUserRow = ({user, refetch, index}) => {
  const {user: loggedInUser} = useAuth()

    const [isOpen, setIsOpen] = useState(false)
    const axiosSecure = useAxiosSecure()
    const { mutateAsync } = useMutation({
      mutationFn: async role => {
        const { data } = await axiosSecure.patch(
          `/users/makeAdmin/${user?.email}`,
          role
        )
        return data
      },
      onSuccess: data => {
        refetch()
        console.log(data)
        toast.success('User role updated successfully!')
        setIsOpen(false)
      },
    })
  
    //   modal handler
    const modalHandler = async  selected  => {
        console.log('user role updated', selected)
      if (loggedInUser.email === user.email) {
        toast.error('Action Not Allowed')
        return setIsOpen(false)
      }
  
      const userRole = {
        role: selected,
        status: 'Verified',
      }
  
      try {
        await mutateAsync(userRole)
      } catch (err) {
        console.log(err)
        toast.error(err.message)
      }
    }
    return (
      <tr>
        <td>{index+1}</td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>image</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{user?.name}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
        </td>    
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{user?.role}</p>
        </td>
     
  
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button
          onClick={() => setIsOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Make Admin</span>
        </button>
        {/* Update User Modal */}
        <UpdateUserModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          modalHandler={modalHandler}
          user={user}
        />
      </td>
      </tr>
    )
  }
  
 AdminUserRow.propTypes = {
    user: PropTypes.object,
    refetch: PropTypes.func,
};

export default AdminUserRow;