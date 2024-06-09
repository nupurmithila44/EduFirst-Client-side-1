import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";


const AllClassRow = ({ allClasses, index, refetch }) => {
    const axiosSecure = useAxiosSecure()




    //   aproved handler
    const handleAproved = allClasses => {
        axiosSecure.patch(`/allClass/${allClasses?.email}`)
            .then(res => {
                console.log(res)
                if (res.data.deletedCount > 0) {
                    //refetch to update the ui  
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${allClasses.name} has been Approved`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    //reject
    const handleReject = allClasses => {
        axiosSecure.patch(`/allReject/${allClasses?.email}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    //refetch to update the ui  
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${allClasses.name} has been rejected`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    return (
        <tr>
            <td>{index + 1}</td>
            <td className='border-b border-gray-200 bg-white text-sm'>
                <img src={allClasses?.image} alt="" />
                {/* <p className='text-gray-900 whitespace-no-wrap'>{}</p> */}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{allClasses?.photo}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{allClasses?.title}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{allClasses?.email}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{allClasses?.description}</p>
            </td>

            <td className='px-5 py-5 border-b '>
                <button onClick={() => handleAproved(allClasses)}

                    className=' cursor-pointer  px-3 py-1 font-semibold text-green-900 bg-green-300 rounded-md leading-tight'
                >
                    Accept
                </button>
            </td>
            <td>
                <button onClick={() => handleReject(allClasses)} className=' cursor-pointer  px-3 py-1 font-semibold  bg-red-300 rounded-md leading-tight'>Reject</button>
            </td>
        </tr>
    );
};

export default AllClassRow;