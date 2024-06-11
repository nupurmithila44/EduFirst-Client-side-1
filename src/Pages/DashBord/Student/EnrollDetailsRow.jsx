


const EnrollDetailsRow = ({assign, index}) => {
    console.log(assign)
 
    return (
       
        <tr>
        <td>{index + 1}</td>
      
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>{assign?.assignTitle}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>{assign?.assignDescription }</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>{assign?. deadline}</p>
        </td>
    
        <td>
            <button  className=' cursor-pointer  px-3 py-1 font-semibold  bg-blue-300 rounded-md leading-tight'>submit</button>
        </td> 
    </tr>
    );
};

export default EnrollDetailsRow;
