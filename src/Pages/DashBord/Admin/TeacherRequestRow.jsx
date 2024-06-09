// import useAuth from "../../../Hook/useAuth";
// import UpdateTeacherModal from "../../../Component/Modal/UpdateTeacherModal"
// import { useState } from "react";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const TeacherRequestRow = ({addteaches, index, refetch}) => {

    const axiosSecure = useAxiosSecure()

  
    //   aproved handler
    const handleAproved = addteaches => {
     axiosSecure.patch(`/addteach/${addteaches?._id}/${addteaches?.email}`)
     .then(res => {
     if(res.data?.result?.modifiedCount > 0){
      toast.success(`${addteaches?.name} is teacher`)
     }
     })
    }

  const handleReject = addteaches =>{
    axiosSecure.patch(`/addteach/${addteaches?._id}/${addteaches?.email}`)
     .then(res => {
     console.log(res.data)
     
     })
  }

  

    return (
        <tr>
        <td>{index+1}</td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <img src={addteaches?.photo} alt="" />
          {/* <p className='text-gray-900 whitespace-no-wrap'>{}</p> */}
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{addteaches?.name}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{addteaches?.category}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{addteaches?.option}</p>
        </td>    
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{addteaches?.status}</p>
        </td> 
        
        <td className='px-5 py-5 border-b '>
        <button onClick={() => handleAproved(addteaches)}
        disabled={addteaches?.status !== 'pending'}
          className=' cursor-pointer  px-3 py-1 font-semibold text-green-900 bg-green-300 rounded-md leading-tight'
        >
         Accept 
        </button>   
      </td>
      <td>
        <button onClick={()=> handleReject(addteaches)} className=' cursor-pointer  px-3 py-1 font-semibold  bg-red-300 rounded-md leading-tight'>Reject</button>
      </td>
      </tr>
    );
};

export default TeacherRequestRow;