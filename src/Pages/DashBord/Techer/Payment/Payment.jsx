
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutFrom from "./CheckOutFrom";
// todo
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETEWAY_PK);

const Payment = () => {
const loaderData = useLoaderData();
 const {price, _id,category,description,email,image,status,title, name, enrollment} = loaderData;
 

    return (
    <>
        <div>
           <SectionTitle heading='Payment' ></SectionTitle> 
        </div>
        <div>
        <h2 className="text-2xl"> total Payment: {price}</h2>
        </div>
       <div>
       <Elements stripe={stripePromise} >
             <CheckOutFrom price={price} _id={_id} category={category} name={name} description={description} email={email} image={image} title={title} enrollment={enrollment} ></CheckOutFrom>
                </Elements>
       </div>

    </>
    );
};

export default Payment;