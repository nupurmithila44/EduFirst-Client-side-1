import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {
    return (
        <div className="flex">
        {/* deshboard side bar  */}
        <div className="w-64 min-h-screen bg-orange-500">
        <ul>
            <li><NavLink to="/deshboard/addclass">addClass</NavLink></li>
        </ul>


        </div>

        {/* dashboard content  */}
        <div className="flex-1 p-6">
           
            <Outlet></Outlet>
        </div>
    </div>
    );
};

export default DashBoard;