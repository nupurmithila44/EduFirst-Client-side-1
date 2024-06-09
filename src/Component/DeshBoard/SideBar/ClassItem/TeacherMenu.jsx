
import { MdHomeWork } from 'react-icons/md';
import ClassItem from './ClassItem';
import { FaAddressBook } from 'react-icons/fa';
// import { CgProfile } from 'react-icons/cg';




const TeacherMenu = () => {
    return (
        <>   
          <ClassItem label='Add Class' address='addClass' icon={MdHomeWork} />
          <ClassItem label='My Class' address='myClass' icon={FaAddressBook} />

        </>
      )
};

export default TeacherMenu;