import ExpertTeacher from "../ExpertTeacher/ExpertTeacher";
import Banner from "./Banner/Banner";
import Pertnership from "./Pertnership/Pertnership";
import WhyJoin from "./WhyJoin/WhyJoin";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Pertnership></Pertnership>
            <WhyJoin></WhyJoin>
            <ExpertTeacher></ExpertTeacher>
            
        </div>
    );
};

export default Home;