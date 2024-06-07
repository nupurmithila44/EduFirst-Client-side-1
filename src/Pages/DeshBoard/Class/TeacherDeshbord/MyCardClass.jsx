import { Link } from "react-router-dom";

const MyCardClass = ({tech, refetch, handleDelate}) => {

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
                        <p className="font-bold">Date Posted : {tech.price}</p>
                        <p className="font-bold">Mark: {tech.status}</p>
                    </div>
                    <div className="card-actions">
                        <Link to={`/tech/${tech._id}`} ><button  className="btn btn-success">See</button></Link>
                        <Link to={`/dashboard/updateFile/${tech._id}`}><button className="btn btn-success"> update </button></Link>
                        <button onClick={()=>{handleDelate(tech._id)}} className="btn btn-error">delete</button>
                    </div>
                </div>
            </div>
    );
};

export default MyCardClass;