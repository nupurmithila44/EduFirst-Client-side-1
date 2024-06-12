import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://edu-first-server-side.vercel.app'
})

const useAxiosPblic = () => {
    return axiosPublic ;
};

export default useAxiosPblic;