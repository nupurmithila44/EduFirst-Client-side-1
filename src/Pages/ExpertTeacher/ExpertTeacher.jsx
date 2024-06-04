import teach from "../../../src/assets/teacher/deptea.jpg"
import teach2 from "../../../src/assets/teacher/tea.jpg"
import teach3 from "../../../src/assets/teacher/tea.png"
import teach4 from "../../../src/assets/teacher/teal.png"


import SectionTitle from "../../Component/SectionTitle/SectionTitle";



const ExpertTeacher = () => {
    return (
        <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
       
       <SectionTitle heading='OUR EXPERT TEACHERS'></SectionTitle>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                <article className="flex flex-col dark:bg-gray-50">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={teach} />
                    </a>
                    <div className="flex flex-col flex-1 p-6">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                        <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Teacher</a>
                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">damie glendell </h3>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                            <span>June 1, 2024</span>
                            <span>2.1K views</span>
                        </div>
                    </div>
                </article>
                <article className="flex flex-col dark:bg-gray-50">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={teach2} />
                    </a>
                    <div className="flex flex-col flex-1 p-6">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                        <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Teacher</a>
                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Jenny Sheen </h3>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                            <span>June 2, 2024</span>
                            <span>2.2K views</span>
                        </div>
                    </div>
                </article>
                <article className="flex flex-col dark:bg-gray-50">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={teach3} />
                    </a>
                    <div className="flex flex-col flex-1 p-6">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                        <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Teacher</a>
                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">rinky peodan</h3>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                            <span>June 3, 2024</span>
                            <span>2.3K views</span>
                        </div>
                    </div>
                </article>
                <article className="flex flex-col dark:bg-gray-50">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={teach4} />
                    </a>
                    <div className="flex flex-col flex-1 p-6">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                        <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Teacher</a>
                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">jim morrison </h3>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                            <span>June 4, 2024</span>
                            <span>2.4K views</span>
                        </div>
                    </div>
                </article>
            </div>
    </section>
    );
};

export default ExpertTeacher;