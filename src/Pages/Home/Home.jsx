import ExpertTeacher from "../ExpertTeacher/ExpertTeacher";
import Banner from "./Banner/Banner";
import CrateTotalSection from "./CratetotalSection/CrateTotalSection";
import Feadback from "./Feadback/Feadback";
import HighstEnroll from "./HighstEnroll/HighstEnroll";
import Instractor from "./Instractor/Instractor";
import Pertnership from "./Pertnership/Pertnership";
import WhyJoin from "./WhyJoin/WhyJoin";


const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <HighstEnroll></HighstEnroll>
            <WhyJoin></WhyJoin>

            <Pertnership></Pertnership>
            <CrateTotalSection></CrateTotalSection>
            <Instractor></Instractor>
            <Feadback></Feadback>
            <ExpertTeacher></ExpertTeacher>
            
        </div>
    );
};

export default Home;