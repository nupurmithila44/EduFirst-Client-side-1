import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const MyCardClass = ({ tech, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const handleDelate = tech => {
        
        axiosSecure.delete(`/myClass/${tech?._id}`)
            .then(res => {
                console.log(res)
                if (res.data.deletedCount > 0) {
                    //refetch to update the ui  
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${tech.name} has been rejected`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })
    }

    return (
        <div
            className="card  lg:w-96 w-[300px] bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={tech.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{tech.title}</h2>
                <p>{tech.description}</p>
                <p className="text-bold text-sm text-green-500">category Level: {tech.category}</p>
                <div className="flex justify-between">
                    <p className="font-bold">Price: {tech.price}</p>
                    <p className="font-bold">Mark: {tech.status}</p>
                </div>
                <div className="card-actions">
                    <Link to={`/tech/${tech._id}`} ><button disabled={tech?.status !== 'approved'} className="btn btn-success">See Details</button></Link>
                    <Link to={`/dashboard/updateFile/${tech._id}`}><button className="btn btn-success"> update </button></Link>
                    <button onClick={() => { handleDelate(tech) }} className="btn btn-error">delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyCardClass;