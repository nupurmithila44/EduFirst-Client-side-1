import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import EnrollDetailsRow from "./EnrollDetailsRow";
import 'react-responsive-modal/styles.css';
import Modal from "react-responsive-modal";
import { useState } from "react";

import { Rating } from "@mui/material";
import Swal from "sweetalert2";


const EnrollClassDetails = () => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const axiosSecure = useAxiosSecure();

    const { user } = useAuth();


    const { data: assigntable = [], isLoading, refetch } = useQuery({
        queryKey: ['assigntable'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/assigntable`);
            return data;
        },
    })

    const handleModal = async (e) => {
        e.preventDefault();
        const form = e.target;
        const description = form.description.value;
        const rating =form.rating.value ;

        const teReport = {
            description,
            rating,
            email: user.email,
            image: user.photoURL,
            name : user.displayName

        }
        console.log(teReport);
        const res = await axiosSecure.put(`/teReport`, teReport);    
        console.log('assignment save', res.data)
        refetch();
        if(res.data?.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
  
        }
    }

    return (
        <div>
            <SectionTitle heading='Assaingment'></SectionTitle>
            <button onClick={onOpenModal} type="button" className="btn bg-blue-500 w-1/2 ">Teaching Evaluation Report</button>
            <Modal open={open} onClose={onCloseModal} center>
                <div className="my-5 w-[500px]">
                    <form onSubmit={handleModal} className="space-y-3">
                        <div>
                            <label htmlFor="">Assignment Description:</label>
                            <input type="text" name="description" placeholder="description" className="w-full p-3 border-2" />
                        </div>
                        <Rating name="rating" defaultValue={2.5} precision={0.5} />
                        {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> */}

                        <button className="btn btn-primary">Submit</button>

                    </form>
                </div>
            </Modal>
            <div className='py-8 '>
                <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto '>
                    <div className='inline-block min-w-full shadow rounded-lg overflow-hidden '>
                        <table className='min-w-full leading-normal '>
                            <thead className=" ">
                                <tr className="">
                                    <th>
                                        #
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Title
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Description
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Deadline
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    assigntable.map((assign, index) => <EnrollDetailsRow key={assign._id} index={index} assign={assign}></EnrollDetailsRow>)
                                }
                    

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default EnrollClassDetails;