import useAuth from "../../../Hook/useAuth";
import useRole from "../../../Hook/useRole";
import LoadingSpiner from "../../../Shared/LoadingSpinder/LoadingSpiner";


const Profile = () => {
    const { user, loading } = useAuth();
    const [role, isLoading] = useRole();
    if(loading || isLoading) return <LoadingSpiner></LoadingSpiner>
    return (
        <div className=" ">
            <div className="w-2/4 mx-auto outline-none m-3 border-2 border-blue-700  p-4 rounded-md">
            <div className="w-24 mx-auto ">
                <a href="#" className="relative block" >
                    <img alt='profile' src={user?.photoURL} className="mx-auto rounded-lg object-cover h-24 w-24  border text-white" />
                </a>
            </div>
            <p className="p-2 px-4   text-black bg-gray-100 rounded-full w-24 mx-auto mt-4 font-bold text-xl">{role}</p>
            <p className="mt-2 p-2 px-4 text-xl  rounded-full font-bold "> Email <span>{user?.email}</span></p>
            <div className="w-full p-2 mt-3 rounded-lg">
                <div className="flex flex-wrap items-center justify-between text-sm">
                    <p className="font-bold text-xl"> Name: <span className="text-sm font-bold">{user?.displayName}</span></p>
                    <p className="flex flex-col">user phone : </p>
                </div>

            </div>
        </div>
        </div>
    );
};

export default Profile;