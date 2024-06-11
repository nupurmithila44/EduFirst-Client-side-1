import { Link, useLoaderData } from "react-router-dom";


const AllClassDetails = () => {
    const loaderData = useLoaderData()

    const { _id, title, description, category, price, image, name, enrollment } = loaderData;

    return (
        <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
            <div className="container mx-auto space-y-12">
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src={image} alt="" className="h-80 rounded-lg dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                        <span className="text-xl uppercase dark:text-gray-600">Title: {title}</span>
                        <h3 className="text-3xl font-bold">{name}</h3>
                        <h1>{category}</h1>
                        <p className="my-6 dark:text-gray-600">{description}</p>
                        <div className="flex justify-between w-full">
                            <p>Price: ${price}</p>
                            <p>Total Enrollment: {enrollment}</p>
                        </div>
                        <Link to={`/payment/${_id}`} ><button type="button" className="btn bg-blue-300 w-1/2 ">pay</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllClassDetails;