import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import per1 from '../../../assets/partner/amzon.png';
import per2 from '../../../assets/partner/google2.0.0.1441125613 (1).jpg';
import per3 from '../../../assets/partner/Figma-Logo-PNG-Photos.png';
import per4 from '../../../assets/partner/png-transparent-spotify-hd-logo.png';
import per5 from '../../../assets/partner/mozila(2).jpg';


const Pertnership = () => {

    return (
        <div className="container mx-auto">
            <SectionTitle heading='Best institutions' subHeading='Giving us the best skill developer programmers in the country' ></SectionTitle>
            <div className="grid grid-cols-2 lg:grid-cols-5 mx-auto lg:ml-10">
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