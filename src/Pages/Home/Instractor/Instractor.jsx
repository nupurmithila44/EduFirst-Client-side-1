import { Link } from 'react-router-dom';
import  pic1 from '../../../assets/HomePage/ban5.jpg'

const Instractor = () => {
    return (
        <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src={pic1} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<h3 className="text-3xl font-bold">Become an instructor</h3>
				<p className="my-6 dark:text-gray-600">instrator from around the world tech milion an learner. we provide the skill to tech what we love</p>
				<Link to='/teachOn'><button  className="btn bg-blue-300 w-1/2">start teaching today</button></Link>
			</div>
		</div>
	
	</div>
</section>
    );
};

export default Instractor;