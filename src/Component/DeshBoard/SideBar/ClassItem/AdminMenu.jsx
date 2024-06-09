import ClassItem from "./ClassItem";

import { FaAddressBook, FaBook, FaChalkboardTeacher  } from "react-icons/fa";


const AdminMenu = () => {
    return (
        <>
        <ClassItem label='allClass' address='allClass' icon={FaBook} ></ClassItem>
          
          <ClassItem label='Teacher Request' address='techerRequest' icon={FaAddressBook} />

          <ClassItem label='User' address='adminUsers' icon={FaChalkboardTeacher} />

        </>
    );
};

export default AdminMenu;