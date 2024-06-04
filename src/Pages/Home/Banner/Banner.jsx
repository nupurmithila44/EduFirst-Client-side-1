import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ban1 from '../../../assets/HomePage/benner1.jpg'
import ban2 from '../../../assets/HomePage/ban2.png'
import ban3 from '../../../assets/HomePage/ban3.jpg'
import ban4 from '../../../assets/HomePage/ban4.jpg'
import ban5 from '../../../assets/HomePage/ban5.jpg'
import ban6 from '../../../assets/HomePage/ban6.jpg'



const Banner = () => {
    return (
        <Carousel>
        <div>
            <img src={ban2} />
          
        </div>
        <div>
            <img src={ ban1} />
            
        </div>
        <div>
            <img src={ban3} />
        
        </div>
        <div>
            <img src={ban4} />
        
        </div>
        <div>
            <img src={ban5} />
        
        </div>
        <div>
            <img src={ban6} />
        
        </div>
    </Carousel>
    );
};

export default Banner;