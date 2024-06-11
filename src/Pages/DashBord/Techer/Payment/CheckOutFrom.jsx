import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../../Hook/useAuth";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const CheckOutFrom = ({price, _id, category,description,email,image,title, name, enrollment}) => {
    console.log(price, _id)
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState('');
    const {user} =useAuth();
   
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
  
    const navigate =useNavigate();
  

    useEffect(() =>{
   axiosSecure.post('/create-payment-intent', {price: price})
   .then(res =>{
    console.log(res.data.clientSecret)
    setClientSecret(res.data.clientSecret);
   })
    },[axiosSecure, price])
    const handleSubmit = async (event) => {
        event.preventDefault();
         if(!stripe || !elements){
            return
         }

         const card = elements.getElement(CardElement)
         if(card == null){
            return
         }

         const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
         })
         if(error){
            console.log('payment error', error)
            setError(error.message)
         }

         else{
            console.log('payment method', paymentMethod)
            setError('');
         }

         //confirm payment
         const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card: card,
                billing_details: {
                  email: user?.email || 'anonymous',
                  name: user?.displayName || 'anonymous',
                }

            }
         })
         if(confirmError){
            console.log('confirm error', confirmError)
         }
         else{
            console.log('payment intent', paymentIntent)
            if(paymentIntent.status === 'succeeded'){
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);
            
                

                // now save the payment in the database
                const payment = {
                    email: email,
                    price: price,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    classIds: _id,
                    status: 'pending',
                    category: category,
                    description:description,
                    image:image,
                    title:title,
                    name:name,
                    enrollment: enrollment
                }

                const res = await axiosSecure.put(`/payments/${_id}`, payment);
                console.log('payment save', res.data)
                // refetch();
                if(res.data?.paymentResult?.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate('/dashboard/myClassEnroll')
                }
            }
         }
    }
    return (
        <form onSubmit={handleSubmit}>
        <CardElement
            options={{
                style: {
                    base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                },
            }}
        />
        <button className="btn btn-primary my-6" type="submit" disabled={!stripe || !clientSecret}>
            Pay
        </button>
        <p className="text-red-500">{error}</p>
        {transactionId && <p className="text-green-500"> your transaction id: {transactionId}</p>}
    </form>
    );
};

export default CheckOutFrom;