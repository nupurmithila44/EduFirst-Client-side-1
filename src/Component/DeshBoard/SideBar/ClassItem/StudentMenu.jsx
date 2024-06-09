import { CgProfile } from "react-icons/cg";
import ClassItem from "./ClassItem";
import { FaAddressBook } from "react-icons/fa";



const StudentMenu = () => {
    return (
       <>
          <ClassItem label='profile' address='/dashboard/profile' icon={CgProfile} ></ClassItem>
          <ClassItem label='My Enroll Class' address='enrollClass' icon={FaAddressBook} />       
       </>
    );
};

export default StudentMenu;