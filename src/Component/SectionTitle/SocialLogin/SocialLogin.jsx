import {  useNavigate } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
import useAxiosPblic from "../../../Hook/useAxiosPublic";
import { FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    const axiosPublic = useAxiosPblic();
    const { googleSignIn } = useAuth();
    const navigate = useNavigate()
    const handleGoogleSingIn = () =>{
        googleSignIn()
        .then(result =>{
            const userInfo ={
                email: result.user?.email,
                name: result.user?.displayName   
           }
           axiosPublic.post('users', userInfo)
           .then(res =>{
            console.log(res)
            navigate('/')
           })
        }
    
        )
        .catch(error=>{
            console.error(error)
        })
       }

    
    return (
        <div className="mx-1  text-center">
              <div className="divider"></div> 
            <button onClick={handleGoogleSingIn} className="btn"> <FaGoogle className="ml-4"></FaGoogle> Google</button>
        </div>

    );
 
};

export default SocialLogin;