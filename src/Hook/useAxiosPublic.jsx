import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'http://localhost:8000'
})

const useAxiosPblic = () => {
    return axiosPublic ;
};

export default useAxiosPblic;