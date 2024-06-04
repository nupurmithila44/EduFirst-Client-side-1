
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { GiTeacher } from "react-icons/gi";
import { BsStopwatch } from "react-icons/bs";
import { FaList } from "react-icons/fa";


const WhyJoin = () => {
    return (
        <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
        <SectionTitle heading='why join the Edufirst' subHeading='The students from Aarti performed very well in entrance examinations '></SectionTitle>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center p-4">
                <GiTeacher className="text-3xl"></GiTeacher>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                </svg> */}
                <h3 className="my-3 text-3xl font-semibold">Expert Teacher</h3>
                <div className="space-y-1 leading-tight">
                    <p>examinations and  were admitted </p>
                    <p>Tempore quasi porro</p>
                    <p>Blanditiis aut mollitia ex</p>
                </div>
            </div>
            <div className="flex flex-col items-center p-4">
               <BsStopwatch className="text-3xl"></BsStopwatch>
                <h3 className="my-3 text-3xl font-semibold">Online Course</h3>
                <div className="space-y-1 leading-tight">
                    <p>building an environment</p>
                    <p>Tempore quasi porro</p>
                    <p>Blanditiis aut mollitia ex</p>
                </div>
            </div>
            <div className="flex flex-col items-center p-4">
                <FaList className="text-3xl"></FaList>
                <h3 className="my-3 text-3xl font-semibold">POPULAR COURSES</h3>
                <div className="space-y-1 leading-tight">
                    <p>programs have been used </p>
                    <p>Tempore quasi porro</p>
                    <p>Blanditiis aut mollitia ex</p>
                </div>
            </div>
        
        </div>
    </section>
    );
};

export default WhyJoin;