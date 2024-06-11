import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import LoadingSpiner from "../../../../Shared/LoadingSpinder/LoadingSpiner";
import { useParams } from "react-router-dom";
import useAxiosPblic from "../../../../Hook/useAxiosPublic";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";
import { useState } from "react";
import 'react-responsive-modal/styles.css';
import Modal from "react-responsive-modal";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";


const SeeDetails = () => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const axiosSecure = useAxiosSecure();
    const {id} = useParams();

    const { data: tech =[] , isLoading, refetch } = useQuery({
        queryKey: ['tech', id ],
        queryFn: async () => {
          const { data } = await axiosSecure.get(`/tech/${id}`);
          return data;
        },
      })
      console.log(tech)

      const handleModal = async (e) => {
        e.preventDefault();
        const form = e.target;
        const assignTitle = form.title.value;
        const deadline = form.dead.value;
        const assignDescription = form.description.value;

        const assignments = {
            assignTitle,
            deadline,
            assignDescription,
            classId : tech._id,
            email: tech.email,
            enroll : tech.enrollment,
            image : tech.image
        }
        console.log(assignments);
        const res = await axiosSecure.put(`/assignment`, assignments);
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
            //   navigate('/dashboard/myClassEnroll')
        }
    }
    
      if (isLoading) return <LoadingSpiner></LoadingSpiner>
    return (
        <div className="container w-1/2 mx-auto space-y-4">
            <SectionTitle heading='Class Progress'></SectionTitle>
            <div  className="mx-auto w-1/2 mb-3 opacity-60">
                <h1 className="font-bold text-2xl">Total enrollment: <span>{tech.enrollment}</span></h1>
                <h1 className="font-bold text-2xl">Total assignment: <span></span></h1>
                <h1 className="font-bold text-2xl">Per day assignment: <span>300</span></h1>
                <button onClick={onOpenModal} type="button" className="btn bg-blue-300 w-1/2 ">Create Assignment</button>
                <Modal open={open} onClose={onCloseModal} center>
                            <div className="my-5 w-[500px]">
                                <form onSubmit={handleModal} className="space-y-3">
                                    <div>
                                        <label htmlFor="">Assignment title:</label>
                                        <input type="text" name="title" placeholder="title" className="w-full p-3 border-2" />
                                    </div>
                                    <div>
                                        <label htmlFor="">assignment deadline:</label>
                                        <input type="date" name="dead" placeholder="dead" className="w-full p-3 border-2" />
                                    </div>
                                    <div>
                                        <label htmlFor="">Assignment Description:</label>
                                        <input type="text" name="description" placeholder="description" className="w-full p-3 border-2" />
                                    </div>
                                   
                                    <button className="btn btn-primary">Submit</button>
                                  
                                </form>
                            </div>
                        </Modal>
            </div>
           
        </div>
    );
};

export default SeeDetails;