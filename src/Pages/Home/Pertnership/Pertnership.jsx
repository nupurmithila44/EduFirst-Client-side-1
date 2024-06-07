import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import per1 from '../../../assets/pertnerShip/apex-shoes-logo-D0480BCBDE-seeklogo.com.png';
import per2 from '../../../assets/pertnerShip/brac-logo-big.png';
import per3 from '../../../assets/pertnerShip/images.png';
import per4 from '../../../assets/pertnerShip/uni.png';
import per5 from '../../../assets/pertnerShip/IPDC-logo.png';


const Pertnership = () => {

    return (
        <div className="container">
            <SectionTitle heading='Best institutions' subHeading='Giving us the best skill developer programmers in the country' ></SectionTitle>
            <div className="grid grid-cols-2 lg:grid-cols-5 lg:ml-10">
                <img className=" w-20 h-20 outline-none sm:w-32 sm:h-32" src={per1} alt="" />
                <img className=" w-20 h-20 outline-none sm:w-32 sm:h-32" src={per2} alt="" />
                <img className=" w-20 h-20 outline-none sm:w-32 sm:h-32" src={per3} alt="" />
                <img className=" w-20 h-20 outline-none sm:w-32 sm:h-32" src={per4} alt="" />
                <img className=" w-20 h-20 outline-none sm:w-32 sm:h-32" src={per5} alt="" />
            </div>

            
        </div>
    );
};

export default Pertnership;