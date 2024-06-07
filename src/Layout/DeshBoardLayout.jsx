import { Outlet } from "react-router-dom";
import Sidebar from "../Component/DeshBoard/SideBar/Sideber";


const DeshBoardLayout = () => {
    return (
        <div className='relative min-h-screen md:flex'>
          {/* Sidebar */}
           <Sidebar></Sidebar>
    
          {/* Outlet --> Dynamic content */}
          <div className='flex-1 md:ml-64'>
            <div className='p-5'>
              <Outlet />
            </div>
          </div>
        </div>
      )
};

export default DeshBoardLayout;