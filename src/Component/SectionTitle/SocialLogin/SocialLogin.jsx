import {  useNavigate } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
import useAxiosPblic from "../../../Hook/useAxiosPublic";
import { FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    // const axiosPublic = useAxiosPblic();
    const { googleSignIn } = useAuth();
    const navigate = useNavigate()
    const handleGoogleSingIn = () =>{
        googleSignIn()
        .then(()=>{
            navigate('/')
        })
        // .then(result =>{
        //     const userInfo ={
        //         name: result.user?.displayName,
        //         email: result.user?.email
                   
        //    }
        //    axiosPublic.post('users', userInfo)
        //    .then(res =>{
        //     console.log(res)
        //     navigate('/')
        //    })
        // }
    
        // )
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